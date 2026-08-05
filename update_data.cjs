const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'artifacts', 'portfolio', 'src', 'lib', 'data.ts');
let content = fs.readFileSync(dataPath, 'utf-8');

// Replacement 1: Worksphere
content = content.replace(/"research": \{\s*"methods": \[\s*"Stakeholder Interviews",\s*"Employee Surveys",\s*"Contextual Inquiry",\s*"Heuristic Evaluation"\s*\],\s*"interviewQuestions": \[\s*"How many tools do you use daily for HR\/Management tasks\?",\s*"What frustrates you the most about the current check-in process\?",\s*"How do you track your OKRs\?",\s*"How often do you lose track of assigned tasks\?"\s*\]\s*\},\s*"researchFindings": \{\s*"points": \[\s*"78% of employees hated logging into multiple systems.",\s*"Task tracking and attendance were the most frequently used features.",\s*"Managers spent over 4 hours a week manually consolidating team reports.",\s*"Legacy interfaces were considered 'too dense' and overwhelming."\s*\]\s*\},/g,
`"coreInsights": [
      {
        "title": "Tool Fatigue",
        "description": "78% of employees hated logging into multiple systems, leading to missed attendance logs and OKR updates."
      },
      {
        "title": "Manager Overhead",
        "description": "Managers spent over 4 hours a week manually consolidating team reports from 4 different legacy tools."
      },
      {
        "title": "Information Density",
        "description": "Legacy interfaces were considered 'too dense', causing cognitive overload for simple tasks."
      }
    ],`);

content = content.replace(/"ideation": \{\s*"text": "I started with Crazy 8s, focusing on the Dashboard layout. I explored a widget-based approach vs. a list-based approach. The widget approach won because it allowed users to customize their view based on priority \(e.g., keeping OKRs visible at the top\)."\s*\},\s*"lowFidelity": \{\s*"text": "Early wireframes focused heavily on the grid system and ensuring the navigation sidebar accommodated future modules. I tested the assumption that users wanted a collapsible sidebar."\s*\},\s*"midFidelity": \{\s*"text": "In the mid-fidelity stage, I refined the widget spacing and introduced the 'Quick Actions' floating bar. Testing showed users loved having check-in and leave requests available from any screen."\s*\},/g,
`"keyDecisions": [
      {
        "title": "Widget over List Layout",
        "description": "Instead of a static list, I pivoted to a widget-based approach because users needed to customize their dashboard based on priority (e.g., keeping OKRs visible at the top)."
      },
      {
        "title": "Quick Actions Bar",
        "description": "Testing revealed users were frustrated navigating away to perform simple tasks. I introduced a persistent floating bar so users could request leave or check-in from any screen."
      }
    ],
    "turningPoints": [
      {
        "title": "Sidebar Navigation",
        "description": "Testing the assumption that users wanted a collapsible sidebar revealed they needed it fixed. Hiding the sidebar increased time-on-task for navigating between modules."
      }
    ],`);

content = content.replace(/"reflection": \{\s*"text": "Initially, I tried to pack too much data into the dashboard. User testing quickly revealed that employees wanted actionable items, not just data. This taught me to prioritize 'tasks to be done' over 'information to be shown'."\s*\}/g,
`"reflection": {
      "whatILearned": "Initially, I tried to pack too much data into the dashboard. User testing quickly revealed that employees wanted actionable items, not just data.",
      "whatWentWrong": "I underestimated the technical complexity of consolidating APIs from 6 different legacy tools, which delayed the dashboard launch and forced a temporary fallback state.",
      "whatIdDoDifferently": "I would involve backend engineering earlier during the wireframing stage to validate which widgets could actually fetch data in real-time."
    }`);

// Replacement 2: InsightHub
content = content.replace(/"research": \{\s*"methods": \[\s*"Executive Interviews",\s*"Contextual Inquiry",\s*"Competitor Analysis \(Tableau, Looker\)"\s*\],\s*"interviewQuestions": \[\s*"What metrics do you check every single morning\?",\s*"How do you currently share data findings with your team\?",\s*"What frustrates you most about your current BI tool\?"\s*\]\s*\},\s*"researchFindings": \{\s*"points": \[\s*"Executives only care about 3-5 KPIs daily.",\s*"They preferred reading a sentence over analyzing a chart.",\s*"Mobile access was highly requested but poorly executed in current tools.",\s*"Anomalies \(spikes\/drops\) needed immediate highlighting."\s*\]\s*\},/g,
`"coreInsights": [
      {
        "title": "Narrative over Numbers",
        "description": "Executives heavily preferred reading a simple sentence over analyzing a chart, as they only focus on 3-5 KPIs daily."
      },
      {
        "title": "Anomaly Highlighting",
        "description": "Users needed immediate alerts for spikes or drops. The data is only useful if deviations are flagged instantly."
      },
      {
        "title": "Mobile First",
        "description": "Mobile access was a high priority for on-the-go executives, but poorly executed in competitor tools."
      }
    ],`);

content = content.replace(/"ideation": \{\s*"text": "I explored several dashboard layouts. The breakthrough came when I moved away from a 'grid of charts' to a 'feed of insights'. We decided to pair every chart with an AI-generated text block explaining the 'Why'."\s*\},\s*"lowFidelity": \{\s*"text": "Wireframes focused on the hierarchy between the AI text and the visual chart. I tested different chart sizes to ensure the text didn't feel secondary."\s*\},\s*"midFidelity": \{\s*"text": "Mid-fidelity introduced interactive tooltips and the 'Share' workflow. Testing revealed that users wanted the ability to annotate the charts before sharing."\s*\},/g,
`"keyDecisions": [
      {
        "title": "Feed over Grid",
        "description": "I moved away from a traditional 'grid of charts' to a 'feed of insights', prioritizing AI-generated text explanations of 'Why' something happened."
      },
      {
        "title": "Annotation Capabilities",
        "description": "Testing revealed that sharing charts wasn't enough. Users needed the ability to annotate the data before sharing it to Slack."
      }
    ],
    "turningPoints": [
      {
        "title": "Text Hierarchy",
        "description": "Initially, the charts dominated the screen. Testing forced me to shrink the charts and increase the AI text size, making the narrative the primary UI element."
      }
    ],`);

content = content.replace(/"reflection": \{\s*"text": "Designing for data visualization is challenging because users have vastly different levels of data literacy. Relying on AI text summaries proved to be the ultimate equalizer, bridging the gap between raw data and business strategy."\s*\}/g,
`"reflection": {
      "whatILearned": "Designing for data visualization is challenging due to varying levels of data literacy. AI text summaries proved to be the ultimate equalizer.",
      "whatWentWrong": "The AI summaries occasionally hallucinated data trends during the beta phase, which eroded user trust temporarily.",
      "whatIdDoDifferently": "I would implement a 'confidence score' or allow users to view the raw formula the AI used to generate the summary, increasing transparency."
    }`);

// Replacement 3: SupplyChain Nexus
content = content.replace(/"research": \{\s*"methods": \[\s*"Process Mapping Workshops",\s*"User Interviews",\s*"Shadowing Finance Teams"\s*\],\s*"interviewQuestions": \[\s*"How do you currently track a purchase request\?",\s*"What causes the biggest delays in approval\?",\s*"How do you verify budget availability before approving\?"\s*\]\s*\},\s*"researchFindings": \{\s*"points": \[\s*"Approvers ignored emails because they lacked context.",\s*"Requesters constantly messaged finance asking for status updates.",\s*"Vendor onboarding took weeks due to missing documents.",\s*"Role-based access was highly confusing in legacy systems."\s*\]\s*\},/g,
`"coreInsights": [
      {
        "title": "Lack of Context",
        "description": "Approvers often ignored request emails simply because they lacked the necessary budget context to make a decision."
      },
      {
        "title": "Status Anxiety",
        "description": "Requesters constantly messaged finance for status updates because the approval chain was entirely invisible to them."
      },
      {
        "title": "Vendor Friction",
        "description": "Vendor onboarding took weeks due to a fragmented process of emailing missing documents back and forth."
      }
    ],`);

content = content.replace(/"ideation": \{\s*"text": "The biggest design challenge was the 'Approval Tracker'. I sketched multiple versions, comparing a vertical timeline \(like shipping trackers\) versus a horizontal stepper. The vertical timeline was chosen because approval chains can sometimes dynamically branch out to 5\+ people."\s*\},\s*"lowFidelity": \{\s*"text": "Wireframing focused on the 'Request Detail' page. I needed to ensure that approvers had all context \(Budget remaining, ROI justification, attached quotes\) above the fold."\s*\},\s*"midFidelity": \{\s*"text": "I introduced bulk-approval actions for Finance users. Testing showed that making it \*too\* easy to bulk approve was risky, so I added a mandatory summary confirmation modal."\s*\},/g,
`"keyDecisions": [
      {
        "title": "Vertical Timeline",
        "description": "I chose a vertical timeline for the Approval Tracker instead of a horizontal stepper because approval chains dynamically branch out and require more vertical space."
      },
      {
        "title": "Above the Fold Context",
        "description": "I redesigned the Request Detail page to place budget remaining, ROI, and quotes above the fold, directly solving the approver's lack of context."
      }
    ],
    "turningPoints": [
      {
        "title": "Bulk Approval Friction",
        "description": "I introduced bulk-approval actions to save time, but testing showed it was too risky. I added a mandatory summary confirmation modal, proving that friction can sometimes be good UX."
      }
    ],`);

content = content.replace(/"reflection": \{\s*"text": "Designing for enterprise means designing for constraints. I learned that adding friction \(like confirmation modals for big approvals\) is sometimes better UX than making things instantly clickable. Security and compliance dictate the design."\s*\}/g,
`"reflection": {
      "whatILearned": "Designing for enterprise means designing for constraints. Adding friction is sometimes better UX than making things instantly clickable for compliance.",
      "whatWentWrong": "The initial Role-Based Access Control (RBAC) was too rigid, preventing managers from delegating approvals while they were on vacation.",
      "whatIdDoDifferently": "I would map out edge cases like 'Out of Office' delegates and proxy approvers earlier in the workflow mapping phase."
    }`);

fs.writeFileSync(dataPath, content, 'utf-8');
console.log('Data file updated successfully.');
