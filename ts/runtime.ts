import { AppRuntime } from "$ts/apps/runtime";
import { Process } from "$ts/process";
import { getCompatibleHandlers, getHandlerByName } from "$ts/server/fs/file/handler";
import { Store } from "$ts/writable";
import type { App, AppMutator } from "$types/app";
import { FileHandler, PartialArcFile } from "$types/fs";

export class Runtime extends AppRuntime {
  public File = Store<PartialArcFile>();
  public showAll = Store<boolean>(false);
  public compatibles = Store<FileHandler[]>([]);
  public selected = Store<string>("");

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    const args = process.args;

    if (!args.length || !args[0] || typeof args[0] !== "object") {
      this.closeApp();

      return;
    }

    const file = args[0] as PartialArcFile;
    const compatibles = getCompatibleHandlers(file.scopedPath, false);

    this.File.set(file);
    this.compatibles.set(compatibles);

    if (!compatibles.length) this.showAll.set(true);
  }

  public Go(handler?: FileHandler) {
    const fileHandler = handler || getHandlerByName(this.selected.get());

    if (!fileHandler) return;

    fileHandler.handler(this.File.get());

    return this.closeApp(false);
  }
}
