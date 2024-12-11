import './App.css'
import { Card } from './Card.jsx'

export function App () {
  return (
<section className="App">
   <Card isFollowing userName="midudev" name="Miguel Ángel Durán" />
   <Card isFollowing={false} userName="online_asleep" name="Asleep.online" />
   <Card isFollowing userName="PathtoNowhereEN" name="Path to Nowhere" />
</section>
  )
}