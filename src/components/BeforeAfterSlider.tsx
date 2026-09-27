import { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeColor?: string;
  afterColor?: string;
  beforeText?: string;
  afterText?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  beforeColor = '#27272a',
  afterColor = '#c27848',
  beforeText = 'Storm-damaged architectural shingles with active leaks, missing tabs, and compromised underlayment. Wind uplift damage from 90+ MPH gusts.',
  afterText = 'Complete tear-off and replacement with GAF Timberline HDZ architectural shingles. Class 4 impact rated, 130 MPH wind warranty, ice & water shield at all critical points.',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };
  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-col-resize select-none border border-white/[0.08]"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After (Background - Full) */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${afterColor}22 0%, ${afterColor}08 100%)` }}>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 mx-auto rounded-full bg-copper/20 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">{afterText}</p>
          </div>
        </div>
        {/* After Label */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-copper/20 border border-copper/30">
          <span className="text-xs font-[family-name:var(--font-mono)] font-bold text-copper">{afterLabel}</span>
        </div>
      </div>

      {/* Before (Clipped) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          background: `linear-gradient(135deg, ${beforeColor} 0%, #1a1a1e 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-900/20 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">{beforeText}</p>
          </div>
        </div>
        {/* Before Label */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-900/20 border border-red-800/30">
          <span className="text-xs font-[family-name:var(--font-mono)] font-bold text-red-400">{beforeLabel}</span>
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-copper z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-900 border-2 border-copper flex items-center justify-center shadow-lg shadow-copper/20">
          <svg className="w-5 h-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
