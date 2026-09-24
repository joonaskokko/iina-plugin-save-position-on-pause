const { console, core, event, mpv } = iina;

function savePosition() {
  if (core.status.idle || core.status.position === null) {
    return;
  }

  try {
    mpv.command("write-watch-later-config", []);
  } catch (error) {}
}

event.on("mpv.pause.changed", () => {
  if (core.status.paused) {
    savePosition();
  }
});
