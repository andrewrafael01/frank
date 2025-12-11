/**
 * Diagnostic Data
 * 
 * Detective dossier structure with case evidence and verdict options
 */

export const DIAGNOSTIC_DATA = {
  trauma: {
    title: 'Trauma History',
    question: 'Question: How does early trauma shape the path toward harm for Victor and the Creature?',
    caseEvidence: [
      'Victor describes his reaction to the Creature\'s awakening as "breathless horror and disgust," and he immediately flees',
      'The Creature is "a poor, helpless, miserable wretch" at birth and receives no guidance or recognition from Victor.',
      'The Creature faced rejection from every human it encountered.',
      'Both Victor and the Creature experience trauma, Victor through the shock of his own creation, the Creature through repeated social rejection, that shapes their future actions.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor\'s fear and immediate abandonment at the moment of creation establish fear and trauma in the creature that drives everything else.',
        effects: { victorDelta: 12, creatureDelta: -5, systemDelta: -2 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The creature saying "I was benevolent and good; misery made me a fiend" shows the creature\'s awareness of its suffering and its own choice to weaponize it.',
        effects: { victorDelta: -3, creatureDelta: 10, systemDelta: -2 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Victor\'s initial rejection of the Creature puts the Creature in despair. The Creature\'s vengeance and actions increase Victor\'s guilt and horror. Both become stuck in a cycle where each action further increases harm, and neither chooses to break it.',
        effects: { victorDelta: 3, creatureDelta: 3, systemDelta: 12 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  abandonment: {
    title: 'Abandonment Profile',
    question: 'Question: When it comes to abandonment, whose choices played a larger role in causing tragedy?',
    caseEvidence: [
      'Victor escaped immediately after the Creature awakened, leaving it alone at the time it most needed recognition and guidance.',
      'The Creature begins its life without care or protection, from its creator, calling itself "a poor, helpless, miserable wretch."',
      'In looking for companionship, the Creature repeatedly approaches humans but is rejected every time.',
      'Victor experiences multiple chances to acknowledge the Creature\'s suffering or even help but consistently refuses.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor\'s abandonment of the creature is the start of the tear in their relationship. By creating life and immediately running from it, he doesn\'t give the Creature any chance at a normal life. His refusal to listen or engage with the creature increases its loneliness and desperation, fueling the pattern of harm that comes after.',
        effects: { victorDelta: 15, creatureDelta: -8, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'Even though the Creature is abandoned, it ultimately chooses violence. Its suffering explains his pain but does not excuse the decision to harm innocent people.',
        effects: { victorDelta: 5, creatureDelta: 12, systemDelta: 0 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Victor\'s abandonment creates a mark on the Creature and the Creature\'s search for revenge worsens the mark. Society\'s rejection to the Creature also keeps the cycle going.',
        effects: { victorDelta: 3, creatureDelta: 3, systemDelta: 15 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  attachment: {
    title: 'Attachment & Recognition Desires',
    question: 'Question: When it comes to attachment, who fails to meet the need?',
    caseEvidence: [
      'The Creature shows a strong ability for connection while at the De Laceys cottage and yet is not acknowledged.',
      'Victor willingly created a being with connection needs but refused to meet its needs.',
      'The Creature begs Victor for companionship saying "I demand a creature of another sex" and Victor initially agrees but later destroys the companion.',
      'Each time the Creature attempts to form a bond with humans it is met with fear, violence, and even rejection.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor brings a being that needs connection into the world and refuses to provide it. His broken promise of a companion increases the Creature\'s isolation and conflict.',
        effects: { victorDelta: 14, creatureDelta: -7, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The creature\'s ability to empathize is seen when he says "I admired virtue and good feelings and loved the gentle manners of my cottagers", showing that it understands relationships, yet when hurt, it turns that understanding to retaliation.',
        effects: { victorDelta: 4, creatureDelta: 13, systemDelta: 0 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Victor\'s lack of recognition leaves the Creature isolated, and society\'s fear increases that loneliness. The Creature\'s violent responses then make connection just about impossible.',
        effects: { victorDelta: 2, creatureDelta: 2, systemDelta: 14 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  violence: {
    title: 'Violence Motivation',
    question: 'Question: When it comes to violence, who bears the responsibility?',
    caseEvidence: [
      'The Creature murdered William, Victor\'s younger brother.',
      'The Creature murdered Justine by framing her for William\'s death.',
      'The Creature murdered Elizabeth on her wedding night to Victor.',
      'The Creature shares his motives. "If I cannot inspire love, I will cause fear".'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'The Creature\'s violence is a reaction to rejection and broken promises that Victor initiated. Victor creates a being with needs he refuses to meet.',
        effects: { victorDelta: 12, creatureDelta: 5, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature shows he can think clearly and make moral choices, and his murders are decisions made with full awareness.',
        effects: { victorDelta: 3, creatureDelta: 16, systemDelta: -2 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Violence comes from a cycle of Victor\'s rejection, the Creature\'s response, and society\'s fear of difference.',
        effects: { victorDelta: 4, creatureDelta: 4, systemDelta: 13 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  remorse: {
    title: 'Remorse',
    question: 'Question: When it comes to remorse, who shows genuine care?',
    caseEvidence: [
      'Victor often talks about his own suffering "I, not in deed, but in effect, was the true murderer" yet rarely recognizes his role in creating the tragedy.',
      'The Creature shows remorse near the end, saying that it is "the miserable and abandoned, an abortion" and chooses to end its life as a way of recognition of what it did.',
      'Victor warned Walton about the dangers of knowledge but did not take responsibility for his own actions.',
      'The Creature recognized the full scale of the tragedy it caused before its death.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor focuses on his own suffering instead of acknowledging the role he played in the suffering. This shows a refusal to take real responsibility for the tragedy.',
        effects: { victorDelta: 10, creatureDelta: -5, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature shows awareness and expresses remorse for the harm it has caused. Its choice to end its life represents the recognition of guilt and possibly a way to repair what can not be fixed.',
        effects: { victorDelta: -2, creatureDelta: -8, systemDelta: 0 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Both characters struggle with remorse with Victor not being accountable and the Creature regretting after causing irreversible harm. They are both unable to make any meaningful repairs to the situation.',
        effects: { victorDelta: 2, creatureDelta: 2, systemDelta: 12 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  societal: {
    title: 'External Factors',
    question: 'Question: When it comes to society, how much of a role does "the system" play in the tragedy?',
    caseEvidence: [
      'The Creature is rejected instantly by humans and is judged mainly on appearance rather than behavior, "I was terrified when I viewed myself in a transparent pool!", showing how society\'s fear of difference affects its self understanding.',
      'Victor\'s pursuit of knowledge without considering consequences follows society\'s expectations of scientific progress.',
      'The Creature was not allowed to enter human communities despite showing an ability to learn and connect.',
      'Social norms created a world where differences are punished and conformity is enforced.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'While social factors make a difference, individuals still make choices, and Victor\'s pursuit of knowledge without considering consequences matters most.',
        effects: { victorDelta: 8, creatureDelta: 8, systemDelta: -8 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'While social factors matter, individuals still make choices, and the Creature\'s decision to cause violence matters most.',
        effects: { victorDelta: -3, creatureDelta: -3, systemDelta: 18 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Society caused the conditions for tragedy through the fear of difference and pressure for conformity.',
        effects: { victorDelta: 4, creatureDelta: 4, systemDelta: 4 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  deEscalation: {
    title: 'Opportunity for De-Escalation',
    question: 'Question: When chances were there to prevent harm, who failed to de-escalate the situiation?',
    caseEvidence: [
      'The Creature begged Victor to listen during their first confrontation and offered peace in exchange for understanding.',
      'Victor refused multiple opportunities to acknowledge the Creature\'s suffering or take responsibility.',
      'The Creature admits it would have lived peacefully if given companionship or recognition yet Victor doesn\'t meet its wishes.',
      'Both Victor and the Creature allow anger and fear to shape their decisions instead of finding solutions.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor refuses to listen or explore peaceful solutions. His broken promises escalate the Creature\'s struggles and provoke more violence.',
        effects: { victorDelta: 14, creatureDelta: -7, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature is given opportunities to walk away, but instead chooses retaliation. It rejects mercy and turns to harm even when peace is an option.',
        effects: { victorDelta: 5, creatureDelta: 12, systemDelta: 0 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Both characters missed opportunities to de-esculate the situation. Victor misses through denial and fear and the Creature misses through anger and revenge. Each character keeps adding to a cycle that could have ended at many points.',
        effects: { victorDelta: 3, creatureDelta: 3, systemDelta: 15 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  }
}
