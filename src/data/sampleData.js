// ========================================================
// Chatastrophe - Realistic College Project Sample Data
// Reusable dataset for testing the four core features
// ========================================================

export const sampleMessages = [
  {
    id: 1,
    sender: 'Maya',
    role: 'Project Lead',
    timestamp: 'Today, 1:45 PM',
    text: 'Hey everyone! Prof. Henderson just made an announcement on Canvas: the final capstone project submission deadline has been moved up from Sunday midnight to this Friday, Oct 16th at 11:59 PM!',
    category: 'urgent'
  },
  {
    id: 2,
    sender: 'Alex',
    role: 'Frontend & Demo',
    timestamp: 'Today, 1:48 PM',
    text: 'Ugh, why do professors always do this 😩 Also the campus cafe line right now is insane, waited 25 minutes for a cold brew.',
    category: 'casual'
  },
  {
    id: 3,
    sender: 'Liam',
    role: 'Data & Research',
    timestamp: 'Today, 1:50 PM',
    text: 'I survived on 2 hours of sleep and instant noodles last night, don\'t even talk to me about caffeine lol.',
    category: 'casual'
  },
  {
    id: 4,
    sender: 'Maya',
    role: 'Project Lead',
    timestamp: 'Today, 1:52 PM',
    text: 'Heads up, it gets stricter: the Canvas submission portal closes automatically at 11:59 PM sharp with NO grace period. Plus the Turnitin scanner takes 45 minutes to process. Our absolute cutoff to upload must be 10:00 PM Friday!',
    category: 'urgent'
  },
  {
    id: 5,
    sender: 'Chloe',
    role: 'UI & Architecture',
    timestamp: 'Today, 1:55 PM',
    text: 'Good call on 10 PM. Also check the rubric: Prof emphasized that any team with missing README documentation will automatically lose 10% on the final grade!',
    category: 'urgent'
  },
  {
    id: 6,
    sender: 'Liam',
    role: 'Data & Research',
    timestamp: 'Today, 2:01 PM',
    text: 'Guys, about our sync meeting today: can we push the time from 3:00 PM to 4:30 PM? My organic chemistry lab is running overtime until 4:15.',
    category: 'scheduling'
  },
  {
    id: 7,
    sender: 'Chloe',
    role: 'UI & Architecture',
    timestamp: 'Today, 2:03 PM',
    text: '4:30 PM works for me! We can meet in Library Study Room 3B, I booked it for 2 hours.',
    category: 'scheduling'
  },
  {
    id: 8,
    sender: 'Alex',
    role: 'Frontend & Demo',
    timestamp: 'Today, 2:05 PM',
    text: 'Works for me too. Anyone down to order pizza for the study room later?',
    category: 'casual'
  },
  {
    id: 9,
    sender: 'Alex',
    role: 'Frontend & Demo',
    timestamp: 'Today, 2:08 PM',
    text: 'Also did anyone see that college basketball buzzer beater yesterday? Crazy overtime finish lol.',
    category: 'casual'
  },
  {
    id: 10,
    sender: 'Chloe',
    role: 'UI & Architecture',
    timestamp: 'Today, 2:10 PM',
    text: 'Haha yes! But back to business or we won\'t graduate 😅 For the presentation next Tuesday: are we doing purely live software demo, or slides with pre-recorded clips?',
    category: 'decision'
  },
  {
    id: 11,
    sender: 'Maya',
    role: 'Project Lead',
    timestamp: 'Today, 2:14 PM',
    text: 'Let\'s make a final call: a live demo has high impact, but campus WiFi in Lecture Hall B is notorious for dropping during demos.',
    category: 'decision'
  },
  {
    id: 12,
    sender: 'Alex',
    role: 'Frontend & Demo',
    timestamp: 'Today, 2:16 PM',
    text: 'What if we do the live demo as primary, but embed an offline backup screen recording on slide 8 just in case WiFi drops?',
    category: 'decision'
  },
  {
    id: 13,
    sender: 'Liam',
    role: 'Data & Research',
    timestamp: 'Today, 2:18 PM',
    text: 'I vote yes on live demo + offline backup video. Let\'s lock that in.',
    category: 'decision'
  },
  {
    id: 14,
    sender: 'Maya',
    role: 'Project Lead',
    timestamp: 'Today, 2:20 PM',
    text: 'Agreed! Decision locked: live demo with offline fallback video on slide 8. Also, we will use Google Slides so everyone can collaborate in real-time.',
    category: 'decision'
  },
  {
    id: 15,
    sender: 'Maya',
    role: 'Project Lead',
    timestamp: 'Today, 2:25 PM',
    text: 'Here is the division of tasks so we hit Friday 10:00 PM comfortably:\n- Liam: Clean dataset test results and compile the bibliography with proper IEEE citations. Due Thursday by 6:00 PM.\n- Chloe: Finalize Figma UI wireframes and export the high-res architecture diagram PNG. Due Thursday by 9:00 PM.\n- Alex: Build Google Slides deck and integrate benchmark performance charts. Due Friday by 2:00 PM.\n- Maya: I will write the executive summary, review everyone\'s sections, and submit the final ZIP file to Canvas before 10:00 PM Friday.',
    category: 'action'
  },
  {
    id: 16,
    sender: 'Liam',
    role: 'Data & Research',
    timestamp: 'Today, 2:28 PM',
    text: 'Got it, I am on the data cleaning and IEEE citations. Will have them done before Thursday evening.',
    category: 'action'
  },
  {
    id: 17,
    sender: 'Chloe',
    role: 'UI & Architecture',
    timestamp: 'Today, 2:30 PM',
    text: 'On it! Wireframes and architecture diagram will be ready in the shared Google Drive by Thursday 9:00 PM.',
    category: 'action'
  },
  {
    id: 18,
    sender: 'Alex',
    role: 'Frontend & Demo',
    timestamp: 'Today, 2:32 PM',
    text: 'Sounds great. I will start the slide deck and benchmark charts this evening.',
    category: 'action'
  }
];

// Formatted raw text version for textarea display and copying
export const sampleConversationRawText = sampleMessages
  .map((m) => `[${m.timestamp}] ${m.sender} (${m.role}):\n${m.text}\n`)
  .join('\n');

// ========================================================
// Feature 1: Summarize Chats Sample Result
// ========================================================
export const sampleSummarizeResult = {
  title: 'CS 410 Capstone - Final Submission & Presentation Briefing',
  timeframe: 'Today, 1:45 PM – 2:32 PM (18 messages across 4 team members)',
  overview:
    'The CS 410 project team coordinated critical deadline shifts, rescheduled today\'s working session, and agreed upon their final presentation format. With the professor moving the capstone deadline forward to Friday night, the team established an internal buffer, resolved WiFi contingency plans, and divided all remaining project deliverables among team members.',
  keyTopics: [
    {
      title: 'Submission Deadline Moved to Friday',
      summary:
        'Prof. Henderson moved the submission deadline to Friday, Oct 16th at 11:59 PM. Due to Turnitin processing delays and zero grace period, the team set a strict 10:00 PM upload cutoff.'
    },
    {
      title: 'Meeting Rescheduled to 4:30 PM',
      summary:
        'Today\'s sync was pushed back from 3:00 PM to 4:30 PM to accommodate Liam\'s lab session. The team will meet in Library Study Room 3B.'
    },
    {
      title: 'Live Demo with Offline Fallback Approved',
      summary:
        'To guard against Lecture Hall B\'s unstable WiFi, the team unanimously decided to perform a live software demonstration with a pre-recorded backup video embedded on Slide 8.'
    },
    {
      title: 'Task Delegation & Ownership',
      summary:
        'All members received assigned responsibilities covering dataset cleanup, IEEE citations, Figma wireframes, architecture diagrams, Google Slides deck, and final Canvas submission.'
    }
  ],
  keyHighlights: [
    'Canvas portal closes Friday 11:59 PM; team internal deadline is 10:00 PM.',
    'Missing README documentation incurs an automatic 10% penalty.',
    'Today\'s in-person sync is at 4:30 PM in Library Room 3B.',
    'Presentation strategy: Live demo + offline backup video in Google Slides.',
    'Four distinct deliverables assigned with staggered deadlines between Thursday 6 PM and Friday 10 PM.'
  ]
};

// ========================================================
// Feature 2: Urgent News Sample Result
// ========================================================
export const sampleUrgentNewsResult = [
  {
    id: 'urg-1',
    severity: 'Critical',
    category: 'Deadline Alert',
    title: 'Final Capstone Submission Moved to Friday 11:59 PM',
    timestamp: 'Due: Friday, Oct 16 • 11:59 PM (Target: 10:00 PM)',
    details:
      'Prof. Henderson advanced the submission date from Sunday midnight to this Friday. The Canvas portal closes strictly with NO grace period. Because Turnitin plagiarism scanning takes up to 45 minutes, the team\'s hard upload cutoff is 10:00 PM Friday.',
    actionRequired: 'All project deliverables must be merged and packaged before 10:00 PM Friday.'
  },
  {
    id: 'urg-2',
    severity: 'High',
    category: 'Grading Penalty Warning',
    title: 'Strict README Requirement (10% Penalty If Missing)',
    timestamp: 'Grading Rubric Enforcement',
    details:
      'The course rubric emphasizes that any project submitted without comprehensive README documentation will automatically lose 10% on the final grade.',
    actionRequired: 'Ensure installation instructions, dependencies, and architecture overview are thoroughly documented.'
  },
  {
    id: 'urg-3',
    severity: 'Medium',
    category: 'Schedule Change',
    title: 'Today\'s Working Sync Moved to 4:30 PM',
    timestamp: 'Today: 4:30 PM – 6:30 PM',
    details:
      'Originally scheduled for 3:00 PM, the sync was shifted to 4:30 PM due to Liam\'s chemistry lab extension. Chloe booked Library Study Room 3B for 2 hours.',
    actionRequired: 'Bring laptop and project notes to Library Room 3B at 4:30 PM.'
  }
];

// ========================================================
// Feature 3: Decisions Sample Result
// ========================================================
export const sampleDecisionsResult = [
  {
    id: 'dec-1',
    title: 'Presentation Format: Live Demo + Offline Video Fallback',
    status: 'Finalized & Confirmed',
    consensus: 'Unanimous (Maya, Alex, Liam, Chloe)',
    rationale:
      'Lecture Hall B has notorious WiFi instability. While a live demo offers higher impact for the grade, having a pre-recorded backup video on Slide 8 guarantees zero downtime if the network drops.',
    outcome:
      'Alex will embed the backup video on Slide 8 and prepare the primary live demo walkthrough.'
  },
  {
    id: 'dec-2',
    title: 'Presentation Tooling: Google Slides for Collaborative Editing',
    status: 'Finalized & Confirmed',
    consensus: 'Unanimous (Maya, Alex, Liam, Chloe)',
    rationale:
      'Google Slides allows all 4 team members to edit slides concurrently and avoids version collision issues inherent in sharing static PPTX files.',
    outcome:
      'Alex will initialize the shared Google Slides deck and distribute edit links to the group.'
  },
  {
    id: 'dec-3',
    title: 'Submission Safety Cutoff: Upload at 10:00 PM Friday',
    status: 'Finalized & Confirmed',
    consensus: 'Unanimous (Maya, Alex, Liam, Chloe)',
    rationale:
      'Turnitin plagiarism processing takes up to 45 minutes during peak submission hours. Uploading at 10:00 PM ensures a 2-hour buffer before the Canvas portal lockout at 11:59 PM.',
    outcome:
      'Maya is authorized to freeze code and upload the final ZIP archive at 10:00 PM.'
  }
];

// ========================================================
// Feature 4: Action Items Sample Result
// ========================================================
export const sampleActionItemsResult = [
  {
    id: 'act-1',
    task: 'Clean dataset test results & compile IEEE bibliography citations',
    owner: 'Liam',
    role: 'Data & Research',
    deadline: 'Thursday, Oct 15 • 6:00 PM',
    status: 'In Progress',
    priority: 'High',
    deliverable: 'Cleaned CSV files and formatted bibliography section in shared doc'
  },
  {
    id: 'act-2',
    task: 'Finalize Figma UI wireframes & export high-res architecture diagram',
    owner: 'Chloe',
    role: 'UI & Architecture',
    deadline: 'Thursday, Oct 15 • 9:00 PM',
    status: 'In Progress',
    priority: 'High',
    deliverable: 'Architecture diagram PNG and exported wireframe artboards in Drive'
  },
  {
    id: 'act-3',
    task: 'Build Google Slides deck & integrate benchmark performance charts',
    owner: 'Alex',
    role: 'Frontend & Demo',
    deadline: 'Friday, Oct 16 • 2:00 PM',
    status: 'Assigned',
    priority: 'Medium',
    deliverable: 'Shared Google Slides link with Slide 8 backup video embedded'
  },
  {
    id: 'act-4',
    task: 'Draft executive summary, review team sections & submit ZIP to Canvas',
    owner: 'Maya',
    role: 'Project Lead',
    deadline: 'Friday, Oct 16 • 10:00 PM',
    status: 'Assigned',
    priority: 'Critical',
    deliverable: 'Completed report PDF and packaged project ZIP uploaded to Canvas'
  }
];
