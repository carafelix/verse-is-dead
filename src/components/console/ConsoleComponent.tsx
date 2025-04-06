import { ReactTerminal, TerminalContextProvider } from 'react-terminal'

export default function Console() {
  const commands = {
    whoami: 'jackharper',
  }

  return (
    <div style={{ height: 200 }}>
      <TerminalContextProvider>
        <ReactTerminal
          welcomeMessage={(
            <i>
              Planisterio
              <br />
            </i>
          )}
          errorMessage={(input: any) => (
            `Command "${input}" not found`
          )}
          showControlBar={false}
          commands={commands}
          prompt="$"
        />
      </TerminalContextProvider>
    </div>

  )
}
