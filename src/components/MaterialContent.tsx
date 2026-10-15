'use client';

import React from 'react';

// ─── Inline markdown (***bold italic***, **bold**, *italic*) → styled nodes ──

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (!part) return null;
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith('***') && part.endsWith('***') && part.length > 6) {
      return (
        <strong key={key} className="font-semibold text-gray-900">
          <em className="italic">{part.slice(3, -3)}</em>
        </strong>
      );
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={key} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={key} className="italic text-gray-800">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={key}>{part}</span>;
  });
}

type Bullet = { depth: number; text: string };
type OrderItem = { num: string; text: string };

// ─── Block-level parser ───────────────────────────────────────────────────────

function parseBlocks(body: string) {
  const lines = body.split('\n');
  const blocks: Array<
    | { type: 'heading'; level: number; text: string }
    | { type: 'paragraph'; text: string }
    | { type: 'divider' }
    | { type: 'quote'; lines: string[] }
    | { type: 'bullets'; items: Bullet[] }
    | { type: 'ordered'; items: OrderItem[] }
  > = [];

  for (const raw of lines) {
    const line = raw.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) continue;

    // Horizontal rule
    if (/^(-{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: 'divider' });
      continue;
    }

    // Headings: ## / ### / ####
    const heading = trimmed.match(/^(#{2,6})\s+(.*)$/);
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2].trim() });
      continue;
    }

    // Blockquote (gethers consecutive "> " lines)
    if (trimmed.startsWith('>')) {
      const quoteLines = [trimmed.replace(/^>\s?/, '')];
      let i = lines.indexOf(raw) + 1;
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'quote', lines: quoteLines });
      continue;
    }

    // Bullet list (supports nesting via indentation)
    const bullet = line.match(/^(\s*)-\s+(.*)$/);
    if (bullet) {
      const depth = Math.min(Math.floor(bullet[1].length / 2), 1);
      const items: Bullet[] = [{ depth, text: bullet[2].trim() }];
      let i = lines.indexOf(raw) + 1;
      while (i < lines.length) {
        const m2 = lines[i].match(/^(\s*)-\s+(.+)$/);
        if (!m2) break;
        items.push({ depth: Math.min(Math.floor(m2[1].length / 2), 1), text: m2[2].trim() });
        i++;
      }
      blocks.push({ type: 'bullets', items });
      continue;
    }

    // Ordered list "1. ..." (glues consecutive numbered lines)
    const ordered = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (ordered) {
      const items: OrderItem[] = [{ num: ordered[1], text: ordered[2].trim() }];
      let i = lines.indexOf(raw) + 1;
      while (i < lines.length) {
        const m2 = lines[i].trim().match(/^(\d+)\.\s+(.+)$/);
        if (!m2) break;
        items.push({ num: m2[1], text: m2[2].trim() });
        i++;
      }
      blocks.push({ type: 'ordered', items });
      continue;
    }

    // Plain paragraph
    blocks.push({ type: 'paragraph', text: trimmed });
  }

  return blocks;
}

// ─── Renderer ─────────────────────────────────────────────────────────────────

export default function MaterialContent({ body, className = '' }: { body: string; className?: string }) {
  const blocks = parseBlocks(body);

  // Promote compact bullet groups that directly follow a heading into
  // a single styled card, so headings + lists keep their visual pairing.
  let keyIdx = 0;

  return (
    <div className={`text-gray-700 leading-relaxed text-sm font-sans space-y-4 ${className}`}>
      {blocks.map((block) => {
        const key = `blk-${keyIdx++}`;
        switch (block.type) {
          case 'heading': {
            if (block.level <= 3) {
              return (
                <h3
                  key={key}
                  className="text-base md:text-lg font-serif font-bold text-gray-900 pt-4 flex items-center gap-2.5 border-b border-gray-100 pb-2"
                >
                  <span className="w-1.5 h-5 bg-[#7a1c1c] rounded-full inline-block shrink-0" />
                  {renderInline(block.text, key)}
                </h3>
              );
            }
            return (
              <h4
                key={key}
                className="text-[15px] font-serif font-bold text-gray-900 pt-3 flex items-center gap-2.5"
              >
                <span className="w-1 h-4 bg-[#d4af37] rounded-full inline-block shrink-0" />
                {renderInline(block.text, key)}
              </h4>
            );
          }

          case 'paragraph':
            return (
              <p key={key} className="text-sm text-gray-700 leading-relaxed">
                {renderInline(block.text, key)}
              </p>
            );

          case 'divider':
            return <hr key={key} className="my-6 border-gray-200" />;

          case 'bullets':
            return (
              <div key={key} className="space-y-2 bg-gray-50/70 rounded-xl border border-gray-100 p-4">
                {block.items.map((item, i) => (
                  <div
                    key={`b-${key}-${i}`}
                    className={`flex items-start gap-2.5 ${item.depth > 0 ? 'ml-5' : ''}`}
                  >
                    <span
                      className={`mt-1.5 rounded-full shrink-0 ${
                        item.depth > 0 ? 'w-1.5 h-1.5 bg-gray-400' : 'w-2 h-2 bg-[#7a1c1c]'
                      }`}
                    />
                    <span className="text-xs text-gray-800 leading-relaxed">
                      {renderInline(item.text, `b-${key}-${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            );

          case 'ordered':
            return (
              <div key={key} className="space-y-2.5">
                {block.items.map((item, i) => (
                  <div
                    key={`o-${key}-${i}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-200/40"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#7a1c1c] text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <p className="text-xs text-gray-800 leading-relaxed">
                      {renderInline(item.text, `o-${key}-${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            );

          case 'quote': {
            const first = block.lines[0];
            const rest = block.lines.slice(1);
            return (
              <blockquote
                key={key}
                className="border-l-4 border-[#d4af37] bg-[#fcf8f2] rounded-r-xl rounded-l-sm p-4 space-y-2"
              >
                <p className="text-[13px] font-serif font-semibold text-[#7a1c1c]">
                  {renderInline(first, `q-${key}-0`)}
                </p>
                {rest.map((ln, i) => {
                  const bullet = ln.match(/^(?:\s*)-\s+(.*)$/);
                  return bullet ? (
                    <div key={`q-${key}-b-${i}`} className="flex items-start gap-2 pl-1">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                      <span className="text-xs text-gray-700 leading-relaxed">
                        {renderInline(bullet[1], `q-${key}-b-${i}`)}
                      </span>
                    </div>
                  ) : (
                    <p key={`q-${key}-p-${i}`} className="text-xs text-gray-700 leading-relaxed">
                      {renderInline(ln, `q-${key}-p-${i}`)}
                    </p>
                  );
                })}
              </blockquote>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
