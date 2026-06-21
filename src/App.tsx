function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel" aria-labelledby="app-title">
        <div>
          <p className="eyebrow">Browser video editor</p>
          <h1 id="app-title">minicut</h1>
          <p className="intro">
            A lightweight editing workspace scaffold with preview, timeline, and controls ready for the next feature pass.
          </p>
        </div>
        <button className="import-button" type="button">
          Import media
        </button>
      </section>

      <section className="workspace" aria-label="Editor workspace">
        <div className="preview-card">
          <div className="preview-screen">
            <div className="play-icon" aria-hidden="true">▶</div>
            <p>Media preview area</p>
          </div>
        </div>

        <aside className="controls-panel" aria-label="Clip controls">
          <h2>Controls</h2>
          <div className="control-group">
            <span>Transform</span>
            <div className="control-placeholder" />
          </div>
          <div className="control-group">
            <span>Audio</span>
            <div className="control-placeholder" />
          </div>
          <div className="control-group">
            <span>Export</span>
            <div className="control-placeholder" />
          </div>
        </aside>
      </section>

      <section className="timeline" aria-label="Timeline placeholder">
        <div className="timeline-header">
          <h2>Timeline</h2>
          <span>00:00 / 00:30</span>
        </div>
        <div className="timeline-track">
          <div className="clip clip-primary">Video clip</div>
          <div className="clip clip-secondary">Audio</div>
        </div>
      </section>
    </main>
  );
}

export default App;
