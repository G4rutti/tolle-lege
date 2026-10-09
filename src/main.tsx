import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app/App'
import { liturgicalYearFor } from '@/features/liturgical-year'
import '@/styles/index.css'

// Cor do dia: o arco da marca veste a cor do tempo litúrgico (identidade.md). Ver [data-tempo] em index.css.
document.documentElement.dataset.tempo = liturgicalYearFor(new Date()).season.color

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
