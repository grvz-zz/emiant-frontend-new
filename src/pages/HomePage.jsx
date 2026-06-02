import Hero          from '../components/Hero'
import StatsStrip    from '../components/StatsStrip'
import Industries    from '../components/Industries'
import CoreTechStack from '../components/CoreTechStack'
import Siphotherm    from '../components/Siphotherm'
import BmdBms        from '../components/BmdBms'
import Team          from '../components/Team'
import Insights      from '../components/Insights'
import CareersBanner from '../components/CareersBanner'
import Contact       from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Industries />
      <CoreTechStack />
      <Siphotherm />
      <BmdBms />
      <Team />
      <Insights />
      <CareersBanner />
      <Contact />
    </>
  )
}
