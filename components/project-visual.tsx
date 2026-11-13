import type { Project } from '@/lib/portfolio';
export function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  return (
    <div className={`project-visual ${kind}`} aria-hidden="true">
      <div className="mock-window">
        <div className="mock-top">
          <span className="mock-logo">
            {kind === 'restaurant' ? 'p.' : 'ab.'}
          </span>
          <span>
            {kind === 'restaurant'
              ? 'paradish / overview'
              : 'appointments / schedule'}
          </span>
          <i />
          <i />
          <i />
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            <b>◈</b>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mock-content">
            <div className="mock-title">
              {kind === 'restaurant'
                ? 'A good day, well managed.'
                : 'A little time. A lot of possibility.'}
            </div>
            <div className="mock-subtitle">
              {kind === 'restaurant'
                ? 'Your restaurant, at a glance'
                : 'Find a time that works for you'}
            </div>
            {kind === 'restaurant' ? (
              <>
                <div className="mock-metrics">
                  <div>
                    <small>Today’s orders</small>
                    <strong>128</strong>
                  </div>
                  <div>
                    <small>Tables available</small>
                    <strong>
                      08<span>/ 24</span>
                    </strong>
                  </div>
                </div>
                <div className="chart">
                  {[32, 53, 40, 66, 48, 75, 62, 87, 72, 95, 81, 100].map(
                    (v, i) => (
                      <i key={i} style={{ height: `${v}%` }} />
                    ),
                  )}
                </div>
              </>
            ) : (
              <div className="calendar">
                <b>Choose your appointment</b>
                <div className="calendar-grid">
                  {[
                    'M',
                    'T',
                    'W',
                    'T',
                    'F',
                    'S',
                    'S',
                    ...Array.from({ length: 21 }, (_, i) => String(i + 1)),
                  ].map((v, i) => (
                    <span key={i} className={i === 17 ? 'selected' : ''}>
                      {v}
                    </span>
                  ))}
                </div>
                <div className="mock-slot">
                  10:30 AM <span>Available</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="visual-caption">
        INTERFACE CONCEPT · NOT A PRODUCT SCREENSHOT
      </span>
    </div>
  );
}
