import { ThemeProvider } from 'styled-components'
import { TasksProvider } from './contexts/TasksContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TasksProvider>
        <Home />
      </TasksProvider>
    </ThemeProvider>
  )
}
