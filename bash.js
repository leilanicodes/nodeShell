process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  process.stdout.write(`current directory: ${process.cwd()}`);
  // process.stdout.write(`you typed: ${cmd}`);
  process.stdout.write("\nprompt >");
});
