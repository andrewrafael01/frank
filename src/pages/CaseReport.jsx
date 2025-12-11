/**
 * CaseReport Page
 * 
 * Final forensic report page
 */

import { useNavigate } from 'react-router-dom'
import { useCase } from '../context/CaseContext'
import RapVideoEmbed from '../components/RapVideoEmbed'

export default function CaseReport() {
  const navigate = useNavigate()
  const { 
    victorResponsibility, 
    creatureResponsibility, 
    systemResponsibility,
    resetCase
  } = useCase()
  const getNarrativeSummary = () => {
    const total = victorResponsibility + creatureResponsibility + systemResponsibility
    const victorPctCalc = total > 0 ? parseFloat((victorResponsibility / total * 100).toFixed(1)) : 33.3
    const creaturePctCalc = total > 0 ? parseFloat((creatureResponsibility / total * 100).toFixed(1)) : 33.3
    const systemPctCalc = total > 0 ? parseFloat((100 - victorPctCalc - creaturePctCalc).toFixed(1)) : 33.4
    const victorPct = victorPctCalc.toFixed(1)
    const creaturePct = creaturePctCalc.toFixed(1)
    const systemPct = systemPctCalc.toFixed(1)

    const max = Math.max(victorResponsibility, creatureResponsibility, systemResponsibility)
    
    if (systemResponsibility === max) {
      return `Your case file distributes shared responsibility between Victor and the Creature, with society playing a large role (${systemPct}%). As Victor warns, "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquisition of knowledge" but the real danger is in the social structures that refuse to allow for difference. The Creature saying, "I was benevolent and good; misery made me a fiend," shows how societal rejection caused monstrosity.`
    } else if (victorResponsibility === max) {
      return `Your case file leans toward Victor as primarily responsible (${victorPct}%). His warning "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge" becomes his way of admitting guilt. Victor pursued knowledge without considering consequences and ultimately tried to escape what he did. The Creature's saying, "Remember that I am thy creature; I ought to be thy Adam, but I am rather the fallen angel," shows Victor's failure in creating a child but refusing to be a parent. His actions play the largest role in causing the tragedy.`
    } else if (creatureResponsibility === max) {
      return `Your case file leans toward the Creature as primarily responsible (${creaturePct}%). While the Creature states, "I was benevolent and good; misery made me a fiend," its conscious choices to commit murder cannot be excused. The Creature's change from identifying as "I ought to be thy Adam" to taking on the role as "the fallen angel" shows a choice that it could have pursued different paths despite suffering. While Victor's abandonment and society played a role, the Creature's choices cannot be excused.`
    } else {
      return `Your case file distributes responsibility between Victor and the Creature, with no single party bearing exclusive blame. Victor (${victorPct}%), the Creature (${creaturePct}%), and systemic structures (${systemPct}%) all contribute significantly. Victor's warning, "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge," speaks to individual hubris, while the Creature's statement, "I was benevolent and good; misery made me a fiend," reveals how trauma shapes behavior. The tragedy emerges from a network of failures: Victor's abandonment, the Creature's choices, and systemic rejection of difference.`
    }
  }

  const handleRestart = () => {
    resetCase()
    navigate('/evidence')
  }

  const total = victorResponsibility + creatureResponsibility + systemResponsibility
  const victorPct = total > 0 ? parseFloat((victorResponsibility / total * 100).toFixed(1)) : 33.3
  const creaturePct = total > 0 ? parseFloat((creatureResponsibility / total * 100).toFixed(1)) : 33.3
  const systemPct = total > 0 ? parseFloat((100 - victorPct - creaturePct).toFixed(1)) : 33.4 // Ensure it adds up to 100%

  return (
    <div className="case-report-page">
      <div className="case-report case-report-fade-in">
        <div className="case-report-header">
          <h1 className="case-report-title">CASE REPORT — FRK-001</h1>
        </div>

        <div className="responsibility-distribution">
          <h3 className="distribution-title">Responsibility Distribution</h3>
          <div className="distribution-bars">
            <div className="distribution-bar-item">
              <div className="distribution-label">Victor: {victorPct}%</div>
              <div className="distribution-bar-container">
                <div className="distribution-bar victor-bar" style={{ width: `${victorPct}%` }}></div>
              </div>
            </div>
            <div className="distribution-bar-item">
              <div className="distribution-label">Creature: {creaturePct}%</div>
              <div className="distribution-bar-container">
                <div className="distribution-bar creature-bar" style={{ width: `${creaturePct}%` }}></div>
              </div>
            </div>
            <div className="distribution-bar-item">
              <div className="distribution-label">Society: {systemPct}%</div>
              <div className="distribution-bar-container">
                <div className="distribution-bar system-bar" style={{ width: `${systemPct}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="narrative-summary">
          <h3 className="summary-title">Narrative Summary</h3>
          <p className="summary-text">{getNarrativeSummary()}</p>
        </div>

        <div className="clinical-closing">
          <h3 className="closing-title">Rap Trauma Dump</h3>
          
          <div className="rap-intro">
            <p>
              The Creature and Victor decided to explain their feeling to each other one last time, but this time through rap!
            </p>
          </div>

          <RapVideoEmbed videoId="YEz3Lmns9GI" />

          {/* 
            Original rap verses (hidden, kept for reference):
            
            Victor – Verse:
            I chased the lightning, thought I could play God
            Created life in the lab, but the dream was flawed
            Learn from me, how dangerous is the acquirement of knowledge
            I saw that yellow eye open, felt the horror, felt the damage
            Ran from my creation, left him alone in the dark
            Broke every promise, left my mark
            Now I'm on this ship, dying in the Arctic cold
            Paying for the story that I never should've told

            Creature – Verse:
            I ought to be thy Adam, but I'm the fallen angel instead
            You made me, then you left me, left me for dead
            I was benevolent and good, misery made me a fiend
            Every door slammed in my face, every hope unseen
            If I cannot inspire love, I will cause fear
            That's what you taught me, that's what I learned here
            Life is an accumulation of anguish, but it's dear to me
            Now I'll burn on this pyre, finally set free

            Therapist – Verse:
            Two broken souls locked in a cycle of pain
            One created, one abandoned, both going insane
            Nothing is so painful as a great and sudden change
            Victor saw his dream die, the Creature felt the range
            Of human cruelty, rejection, the fear of what's different
            Monstrosity's not in the form, it's in how we're distant
            From each other, from empathy, from care
            This is a tragedy of creation without repair
          */}
        </div>

        <div className="case-report-footer">
          <button 
            className="back-to-evidence-button" 
            onClick={() => navigate('/evidence')}
          >
            Back to Evidence Board
          </button>
          <button className="restart-case-button" onClick={handleRestart}>
            Restart Case
          </button>
        </div>
      </div>
    </div>
  )
}
