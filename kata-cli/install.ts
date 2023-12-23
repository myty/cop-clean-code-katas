// install.ts
async function installKataCliAlias(): Promise<void> {
    const aliasName = 'kata-cli';
    const aliasCommand = 'deno run --unstable -A https://raw.githubusercontent.com/rsm-hcd/cop-clean-code-katas/main/kata-cli/main.ts';
  
    const bashrcPath = `${Deno.env.get('HOME')}/.bashrc`;
  
    const aliasLine = `\nalias ${aliasName}='${aliasCommand}'\n`;
  
    try {
      await Deno.writeTextFile(bashrcPath, aliasLine, { append: true });
      console.log(`Alias '${aliasName}' has been added to your .bashrc file.`);
      console.log(`Your .bashrc file is located at '${bashrcPath}'.`);
      console.log(`Restart your terminal or run 'source ${bashrcPath}' to apply changes.`);
    } catch (error) {
      console.error(`Error adding alias to .bashrc: ${error}`);
    }
  }

  async function installKataCliUpgradeAlias(): Promise<void> {
    const aliasName = 'kata-cli-update';
    const aliasCommand = 'deno cache --reload https://raw.githubusercontent.com/rsm-hcd/cop-clean-code-katas/main/kata-cli/main.ts';
  
    const bashrcPath = `${Deno.env.get('HOME')}/.bashrc`;
  
    const aliasLine = `\nalias ${aliasName}='${aliasCommand}'\n`;
  
    try {
      await Deno.writeTextFile(bashrcPath, aliasLine, { append: true });
      console.log(`Alias '${aliasName}' has been added to your .bashrc file.`);
      console.log(`Your .bashrc file is located at '${bashrcPath}'.`);
      console.log(`Restart your terminal or run 'source ${bashrcPath}' to apply changes.`);
    } catch (error) {
      console.error(`Error adding alias to .bashrc: ${error}`);
    }
  }

  async function main(): Promise<void> {
    await installKataCliAlias();
    await installKataCliUpgradeAlias();
  }


await main();
  