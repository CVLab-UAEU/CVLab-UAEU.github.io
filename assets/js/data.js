/* =====================================================================
 * CVLab @ UAEU — site content
 * Edit this file to update People, News and Publications.
 * No build step: save, commit, push.
 * ===================================================================== */

window.CVLAB = {

  /* Names printed in bold in the publication list. */
  labAuthors: ["Shengcai Liao", "Kun Li", "Jin Jiang", "Weiran Zhao", "Yanan Wang", "Jiancong Ma", "Qingzhi He", "Jia Wang", "Yingfeng Wang", "Yuxuan Xiao"],

  /* ------------------------------------------------------------ People
   * group: faculty | postdoc | staff | phd | visiting | master | alumni
   *        (sections and order are defined in peopleSections below).
   * photo: path like "assets/img/people/kun-li.webp" (square, ≥ 300px).
   * scholar: Google Scholar profile URL (optional); the person's name becomes a link to it.
   * link:  homepage URL (optional); used for the name link only when there is no scholar.
   * bio:   short introduction, shown only on the director's (first faculty) card. */
  peopleSections: [
    { title: "Faculty", groups: ["faculty"] },
    { title: "Researchers & Students", groups: ["postdoc", "staff", "phd", "visiting", "master"] },
    { title: "Alumni", groups: ["alumni"] }
  ],

  people: [
    { group: "faculty", name: "Shengcai Liao", role: "Associate Professor · Director of CVLab", note: "IEEE Fellow, IAPR Fellow",
      photo: "https://shengcailiao.github.io/image/scliao.png",
      scholar: "https://scholar.google.com/citations?user=CnqsHlAAAAAJ",
      bio: "Founding director of CVLab. Before joining UAEU in 2024, he was a Principal Scientist at the Inception Institute of Artificial Intelligence (G42) and an Associate Professor at the Institute of Automation, Chinese Academy of Sciences. He has published 100+ papers with over 23,000 citations, and has served as Associate Editor of IEEE TPAMI, TIP and TMM and Area Chair of CVPR, ICCV, ECCV, NeurIPS, ICML, ICLR and AAAI." },
    { group: "faculty", name: "Yirui Wu", photo: "assets/img/people/yirui-wu.webp", role: "Associate Professor", scholar: "https://scholar.google.com/citations?user=bmnQSz8AAAAJ" },
    { group: "faculty", name: "Omar El Harrouss", photo: "assets/img/people/omar-el-harrouss.webp", role: "Assistant Professor", scholar: "https://scholar.google.com/citations?user=NcMTCs0AAAAJ" },
    { group: "faculty", name: "Muna Alebri", photo: "assets/img/people/muna-alebri.webp", role: "Assistant Professor", scholar: "https://scholar.google.com/citations?user=nSganTEAAAAJ" },
    { group: "faculty", name: "Jamil Ahmad", photo: "assets/img/people/jamil-ahmad.webp", role: "Assistant Professor", scholar: "https://scholar.google.com/citations?user=7dw-9YgAAAAJ" },
    { group: "faculty", name: "Mustaqeem Khan", photo: "assets/img/people/mustaqeem-khan.webp", role: "Assistant Professor", scholar: "https://scholar.google.com/citations?user=uEZhRWAAAAAJ" },
    { group: "faculty", name: "Longyu Zhou", role: "Assistant Professor", scholar: "https://scholar.google.com/citations?user=Mj6-DqQAAAAJ" },

    { group: "postdoc", name: "Kun Li", photo: "assets/img/people/kun-li.webp", role: "Postdoctoral Fellow" },
    { group: "postdoc", name: "Jin Jiang", photo: "assets/img/people/jin-jiang.webp", role: "Postdoctoral Fellow" },

    { group: "staff", name: "Yassine Ladham", photo: "assets/img/people/yassine-ladham.webp", role: "Research Assistant" },

    { group: "phd", name: "Yingfeng Wang", photo: "assets/img/people/yingfeng-wang.webp", role: "PhD Student", scholar: "" },
    { group: "phd", name: "Tianyi Wang", photo: "assets/img/people/tianyi-wang.webp", role: "PhD Student" },
    { group: "phd", name: "Chenye Yang", photo: "assets/img/people/chenye-yang.webp", role: "PhD Student" },

    { group: "visiting", name: "Yanan Wang", photo: "assets/img/people/yanan-wang.webp", role: "Visiting PhD Student" },
    { group: "visiting", name: "Weiran Zhao", photo: "assets/img/people/weiran-zhao.webp", role: "Visiting PhD Student" },

    { group: "master", name: "Jiancong Ma", photo: "assets/img/people/jiancong-ma.webp", role: "Master Student", link: "" },

    { group: "alumni", name: "Yuxuan Xiao", photo: "assets/img/people/yuxuan-xiao.webp", role: "Visiting PhD Student" },
    { group: "alumni", name: "Qingzhi He", photo: "assets/img/people/qingzhi-he.webp", role: "Visiting Master Student" }
  ],

  /* -------------------------------------------------------------- News
   * Newest first. The News tab shows 10 per page, with page buttons when there are more.
   *
   *   date     "2026.01" (shown as-is)
   *   tag      short category: Event | Ranking | Honor | Paper | Lab | People
   *   title    headline
   *   thumb    picture on the news card, e.g. "assets/img/news/2026-01-nice-thumb.png"
   *            (no thumb → a default banner tile showing `badge` or `tag`)
   *   summary  1–2 sentences for the card (may contain <b>, <i>, <a>)
   *
   *   To make an item clickable with its own article page, also add:
   *   id       unique, URL-safe, e.g. "2026-01-nice-visit" → news.html?id=2026-01-nice-visit
   *   body     the article, in order. Each item is one of:
   *              "paragraph text (simple HTML allowed)"
   *              { img: "assets/img/news/x.jpg", width: 800, caption: "…" }  one picture
   *                (width = shown width in px, never wider than the text column)
   *              { row: [ { img: "…", width: 411 }, { img: "…", width: 411 } ] }  pictures side by side
   *              "<table>…</table>"
   *            A picture whose file is not in assets/img/news/ yet is left out.      */
  news: [
    { id: "2026-11-golden-jubilee-robot", date: "2026.11", tag: "Event", badge: "UAEU 50",
      title: "CVLab’s Humanoid Robot Gives a Speech at UAEU’s Golden Jubilee Celebration",
      summary: "At the exhibition of UAEU’s Golden Jubilee celebration, CVLab’s humanoid robot gave a speech introducing the university’s 50th anniversary.",
      thumb: "assets/img/news/2026-11-golden-jubilee-1.webp",
      body: [
        "On November 11, 2026, CVLab’s humanoid robot took part in the exhibition of the Golden Jubilee celebration of United Arab Emirates University (UAEU), which marks 50 years since the founding of the UAE’s first national university in 1976.",
        { img: "assets/img/news/2026-11-golden-jubilee-1.webp", width: 800 },
        "At the exhibition, the robot delivered a speech to guests introducing UAEU’s Golden Jubilee. The robot’s speech algorithm was developed by Dr. Shengcai Liao, Director of CVLab. The robot also appears in UAEU’s <a href=\"https://www.linkedin.com/posts/uaeu50-uaeugoldenjubilee-ugcPost-7528123458615013377-7TKO/\" target=\"_blank\" rel=\"noopener\">Golden Jubilee video on LinkedIn</a>.",
        { img: "assets/img/news/2026-11-golden-jubilee-2.webp", width: 480 }
      ] },

    { id: "2026-10-great-arab-minds", date: "2026.10", tag: "Award", badge: "Great Arab Minds",
      title: "Dr. Shengcai Liao Wins a Project in the Arab Talent Research and Innovation Program",
      summary: "CVLab Director Dr. Shengcai Liao has been awarded a project in the second cycle of the Arab Talent Research and Innovation Program, together with Prof. Oussama Khatib of Stanford University.",
      thumb: "assets/img/news/2026-10-great-arab-minds-thumb.webp",
      body: [
        "We are pleased to announce that CVLab Director Dr. Shengcai Liao has been awarded a project in the second cycle of the Arab Talent Research and Innovation Program, run by United Arab Emirates University in collaboration with the Great Arab Minds initiative.",
        { img: "assets/img/news/2026-10-great-arab-minds-1.webp", width: 560 },
        "The project, “Unified Embodied Intelligence for Haptic and Expressive Social-Service Robots”, is led by Dr. Shengcai Liao as Principal Investigator, in collaboration with Prof. Oussama Khatib of Stanford University, Great Arab Minds Recipient 2024 in the Engineering and Technology category. It will advance CVLab’s research on embodied AI for humanoid and social robots.",
        "Congratulations to Dr. Liao!"
      ] },

    { id: "2026-09-mod-exhibition", date: "2026.09", tag: "Event", badge: "MoD Exhibition",
      title: "CVLab’s Humanoid Robot at the Ministry of Defence Exhibition at UAEU",
      summary: "CVLab showcased its humanoid robot demos — conversation, speech and egocentric human–robot interaction — at the Ministry of Defence Exhibition at UAEU.",
      thumb: "assets/img/news/2026-09-mod-exhibition-thumb.webp",
      body: [
        "On Monday, 28 September 2026, CVLab’s humanoid robot took part in the Ministry of Defence Exhibition at United Arab Emirates University (UAEU), held at The Founder Sheikh Zayed’s Hall, Crescent Building.",
        { row: [ { img: "assets/img/news/2026-09-mod-exhibition-1.webp", width: 400 },
                 { img: "assets/img/news/2026-09-mod-exhibition-2.webp", width: 400 } ] },
        "At the exhibition, the team demonstrated the robot’s conversation and speech abilities, as well as egocentric (first-person view) human–robot interaction, based on the lab’s recent work <a href=\"https://trabot-humanoid.github.io/\" target=\"_blank\" rel=\"noopener\">TRABot</a> and <a href=\"https://arxiv.org/abs/2610.24559\" target=\"_blank\" rel=\"noopener\">SocialCoAct</a>."
      ] },

    { id: "2026-01-nice-visit", date: "2026.01", tag: "Event", badge: "NICE visit",
      title: "NATIONAL INNOVATION CENTER par EXCELLENCE Delegation Visits UAEU and CVLab",
      summary: "A delegation from the NATIONAL INNOVATION CENTER par EXCELLENCE (NICE) visited UAEU and CVLab, where Dr. Liao presented the lab's research and its R2C 2026 project NOORACT.",
      thumb: "assets/img/news/2026-01-nice-thumb.png",
      body: [
        "On January 23, 2026, a delegation from the NATIONAL INNOVATION CENTER par EXCELLENCE (NICE), a comprehensive national technology innovation center approved by the Ministry of Science and Technology of the People’s Republic of China, visited United Arab Emirates University (UAEU). During the visit, the delegation held discussions with the leadership of UAEU and the College of Information Technology (CIT), exchanging views on university–industry collaboration, talent cultivation, and future cooperation in artificial intelligence and information technology.",
        { img: "assets/img/news/2026-01-nice-1.jpg", width: 1280 },
        { img: "assets/img/news/2026-01-nice-2.jpg", width: 1280 },
        "Following the meeting, the delegation toured the Computer Vision Laboratory (CVLab) at UAEU to engage in academic exchange and gain insight into the laboratory’s latest research achievements and commercialization efforts.",
        { img: "assets/img/news/2026-01-nice-3.jpg", width: 1280 },
        "During the laboratory visit, Dr. Shengcai Liao, Director of the CVLab, introduced the lab’s core research directions and ongoing projects in computer vision and artificial intelligence. He also presented the lab’s Research-to-Commercialization (R2C) 2026 project, “NOORACT,” a unified platform designed for the creation and deployment of robotic systems and digital human presences. The project aims to bridge cutting-edge research with real-world applications in emerging intelligent systems.",
        { img: "assets/img/news/2026-01-nice-4.jpg", width: 1280 },
        "The NOORACT project has been selected as one of the funded teams under the UAEU SIP R2C Program, hosted at the UAEU Science &amp; Innovation Park, and has received AED 100,000 in commercialization support, highlighting its strong innovation potential and practical impact.",
        "Subsequently, Dr. Jin Jiang, a postdoctoral researcher at the CVLab, presented the laboratory’s recent research progress in image and video generation. He introduced a diffusion-model-based approach for face video restoration and shared encouraging preliminary results, demonstrating the method’s effectiveness in enhancing visual quality and temporal consistency.",
        "The visit strengthened mutual understanding between the NATIONAL INNOVATION CENTER par EXCELLENCE and UAEU, and laid a solid foundation for future collaboration in artificial intelligence research, technology transfer, and international innovation partnerships.",
        { img: "assets/img/news/2026-01-nice-5.jpg", width: 1280 }
      ] },

    { id: "2025-12-csrankings", date: "2025.12", tag: "Ranking", badge: "CSRankings",
      title: "UAEU Included in CSRankings with Strong National Positions in Key Research Areas",
      summary: "UAEU is now listed in CSRankings: No. 1 in the UAE in Visualization and No. 2 in the UAE in Computer Vision.",
      thumb: "assets/img/news/2025-12-csrankings-thumb.jpg",
      body: [
        "We are pleased to announce that United Arab Emirates University (UAEU) has been officially included in CSRankings (<a href=\"https://csrankings.org/\" target=\"_blank\" rel=\"noopener\">https://csrankings.org/</a>), a widely recognized, metrics-based ranking of leading computer science institutions worldwide. Following the successful submission and approval of a comprehensive list of College of Information Technology (CIT) faculty members, UAEU’s rankings based on this data have now been published.",
        "CSRankings evaluates research performance by counting publications in the most prestigious, top-tier computer science conferences across a broad range of research areas. It is designed to identify institutions and faculty who are actively engaged in impactful computer science research. Many leading universities globally and regionally actively reference and report CSRankings results, including institutions such as Carnegie Mellon University (CMU) and Stanford University.",
        "According to the latest CSRankings results, UAEU has achieved notable standings in several research areas. In Visualization, UAEU is ranked No. 1 in the UAE, contributed by Dr. Muna Alebri, a primary member of CVLab, highlighting a strong national presence in this specialized area.",
        { img: "assets/img/news/2025-12-csrankings-1.png", width: 762, caption: "Figure 1 UAEU is ranked No. 1 nationally in the Visualization area." },
        "In Computer Vision, UAEU is ranked No. 2 in the UAE, positioned just below MBZUAI and ahead of institutions such as NYU Abu Dhabi and Khalifa University (KU). This ranking reflects a total of 19 publications in top-tier international conferences, including CVPR, ICCV, and ECCV, over the past ten years.",
        { img: "assets/img/news/2025-12-csrankings-2.png", width: 1042, caption: "Figure 2 UAEU is ranked No. 2 nationally in the Computer Vision area." },
        "In addition, the table below summarizes UAEU’s current CSRankings positions at the national (UAE), regional (Asia), and global levels.",
        '<table class="article-table"><thead><tr><th>Area</th><th>UAE</th><th>Asia</th><th>Global</th></tr></thead><tbody>' +
          '<tr><td>All Areas</td><td>3 (tied)</td><td>100</td><td>497</td></tr>' +
          '<tr><td>Artificial Intelligence</td><td>3</td><td>90</td><td>384</td></tr>' +
          '<tr><td>Computer Vision</td><td>2</td><td>66</td><td>230</td></tr>' +
          '<tr><td>Visualization</td><td>1</td><td>49</td><td>230</td></tr>' +
          '<tr><td>Human-Computer Interaction</td><td>3</td><td>83</td><td>402</td></tr>' +
          '<tr><td>Robotics</td><td>4</td><td>95</td><td>441</td></tr></tbody></table>',
        "Together, these results both recognize UAEU’s existing strengths in computer science research and offer valuable direction for future development. They highlight areas of established excellence while also pointing to opportunities for strategic growth, supporting informed planning in research priorities, faculty development, and the university’s long-term academic advancement in computer science."
      ] },

    { id: "2025-11-beihang-visit", date: "2025.11", tag: "Event", badge: "Beihang visit",
      title: "Delegation from Beihang University Visits UAEU’s College of Information Technology",
      summary: "Five faculty members from Beihang University visited UAEU, toured CVLab and saw live demos of human-centered image and video generation.",
      thumb: "assets/img/news/2025-11-beihang-thumb.jpg",
      body: [
        "From November 17 to 18, 2025, a delegation of five faculty members from the School of Computer Science and Engineering at Beihang University (BUAA) visited the College of Information Technology (CIT) at United Arab Emirates University (UAEU). This visit aims to strengthen academic collaboration and explore future research cooperation between the two institutions. The delegation included Prof. Yunhong Wang, Dean of the School of Computer Science and Engineering; Prof. Richong Zhang, Prof. Di Huang, Prof. Yongfei Zhang, and Dr. Zeming Liu.",
        "During the two-day visit, the delegation met with Prof. Mohsen Sharif, Provost of UAEU, and Prof. Khaled Shuaib, Dean of CIT, as well as faculty members including Prof. Abderrahmane Lakas, Prof. Ezedin Baraka, Prof. Hesham Elsayed, and Dr. Shengcai Liao. The meetings provided a valuable opportunity for both sides to present their ongoing research activities and to discuss potential avenues for collaboration in emerging technologies.",
        { row: [ { img: "assets/img/news/2025-11-beihang-1.png", width: 411 }, { img: "assets/img/news/2025-11-beihang-2.png", width: 411 } ] },
        "In addition to academic discussions, the visit also included tours of the Computer Vision Laboratory (CVLab), Robotics Lab, Autonomous Systems and IoT Lab (ASIL), and UAEU Science and Innovation Lab, where the delegation was introduced to the ongoing research projects and innovation initiatives.",
        { row: [ { img: "assets/img/news/2025-11-beihang-3.png", width: 411 }, { img: "assets/img/news/2025-11-beihang-4.png", width: 411 }, { img: "assets/img/news/2025-11-beihang-5.png", width: 411 }, { img: "assets/img/news/2025-11-beihang-6.png", width: 411 } ] },
        "At the CVLab, students and researchers presented their projects and demonstrated live demos on human-centered image and video generation, featuring topics including personalized human synthesis, digital human generation, and video face restoration. Through this visit, both sides expressed strong interest in establishing long-term collaboration through joint research projects, faculty and student exchanges, and academic workshops.",
        { row: [ { img: "assets/img/news/2025-11-beihang-7.png", width: 409 }, { img: "assets/img/news/2025-11-beihang-8.png", width: 411 } ] },
        "The visit concluded with a group photo to commemorate this meaningful academic exchange and to mark the beginning of closer collaboration between the School of Computer Science and Engineering, Beihang University and the College of Information Technology, United Arab Emirates University.",
        { img: "assets/img/news/2025-11-beihang-9.png", width: 597 }
      ] },

    { id: "2025-10-tpami-ae", date: "2025.10", tag: "Honor", badge: "IEEE TPAMI",
      title: "Dr. Shengcai Liao is nominated as an Associate Editor (AE) of the IEEE TPAMI",
      summary: "Dr. Shengcai Liao has been nominated to serve as an Associate Editor of IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI).",
      thumb: "assets/img/news/2025-10-tpami-thumb.jpg",
      body: [
        "We are pleased to announce that Dr. Shengcai Liao has been nominated to serve as an Associate Editor (AE) for the prestigious journal IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI).",
        { img: "assets/img/news/2025-10-tpami-1.png", width: 1201 },
        "IEEE Transactions on Pattern Analysis and Machine Intelligence is a leader in artificial intelligence. The publication features peer-reviewed papers that highlight computer vision and image understanding, pattern analysis and recognition, and machine intelligence.",
        "IEEE TPAMI was established in 1979. It is widely regarded as one of the most prestigious journals in computer vision, pattern recognition, and artificial intelligence. According to recent Journal Citation Reports (JCR), TPAMI has an impact factor of 18.6 for 2024. According to the 2024 Scopus CiteScore, TPAMI achieved a score of 35.0, ranking #1 out of 665 in Applied Mathematics and #1 out of 197 in Computational Theory and Mathematics, further confirming its position as a Q1 journal in both Computer Science and Artificial Intelligence categories.",
        "Dr. Shengcai Liao is an Associate Professor and founding director of the Computer Vision Lab (CVLab) in the College of Information Technology (CIT) in United Arab Emirates University (UAEU). He is an IEEE Fellow and IAPR Fellow. He was a Principal Scientist in IIAI, G42 in UAE during 2018-2024, and an Associate Professor in Institute of Automation, Chinese Academy of Sciences (CASIA) from 2014 to 2018. He received B.S. degree in mathematics from Sun Yat-sen University in 2005 and Ph.D. degree from CASIA in 2010. He was a Postdoc at Michigan State University during 2010-2012.",
        "Dr. Liao is interested in face and person detection, recognition, analysis, and image and video generation. He has published 100+ papers, with 23,313 citations and h-index 57. He ranks #905 among 215,114 world-wide AI scientists (Top 0.42%) in 2019 (by Stanford University). His representative work LOMO+XQDA for person re-identification has been cited 2,643 times and ranks #11 in the Most Influential CVPR Papers 2015. He was awarded Best Paper/Best Student Paper in ICB 2006/2007/2015, and CCBR 2016, Best/Outstanding Reviewer in IJCB 2014, CVPR 2019/2021, Great Contribution Award for Beijing 2008 Olympic Games, Second-Class Award of the China State Science and Technology Progress Award 2019, and Winner of CVPR 2017 Detection in Crowded Scenes Challenge and ICCV 2019 NightOwls Pedestrian Detection Challenge.",
        "In addition to his new role with IEEE TPAMI, Dr. Liao served as an Assistant Editor for “Encyclopedia of Biometrics, 2nd Ed.”, Guest Associate Editor for IEEE T-BIOM, and Associate Editor for IEEE TIP and TMM. He led a successful bid of hosting IJCB 2022 at Abu Dhabi and served as a Program Chair. He served as Program Chair for ICIG 2025 and Area Chair for ICPR 2016, ICB 2016/2018, CVPR 2022/2023/2025, ICCV 2023/2025, ICML 2025, NeurIPS 2023-2025, ECCV 2024, AAAI 2025, and WACV 2024/2025.",
        "We warmly congratulate Dr. Liao on his nomination as Associate Editor of IEEE TPAMI. This recognition reflects his outstanding contributions to the field of computer vision and artificial intelligence and marks another important milestone for UAEU’s College of Information Technology."
      ] }
  ],

  /* ------------------------------------------------------ Publications
   * Grouped by year automatically. `venue` is printed in italics with the
   * short name in parentheses. links: { paper, arxiv, code, project } (all optional).
   * Preprint / under review: leave out `venue` and set short: "arXiv Preprint".
   *
   * Featured Papers and Projects (cards above the list, in the order they appear here;
   * 10 per page, with page buttons when there are more):
   *   featured  true
   *   thumb     the paper's main (framework) figure, e.g. "assets/img/papers/consistentid.webp"
   *             (no thumb → a tile showing the venue and year)
   *   summary   2–3 sentences shown next to the thumbnail
   *   listed    false → card only, not in the All Publications list
   *             (e.g. papers before 2025, which are on Dr. Liao's own list)          */
  publications: [
    { year: 2026, authors: "Yani Zhang, Dongming Wu, Wencheng Han, Xingping Dong, Shengcai Liao, Bo Du",
      title: "Referring Multi-Object Tracking with Diverse Dynamic Expressions",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence", short: "TPAMI", extra: "Early Access",
      links: { paper: "https://doi.org/10.1109/TPAMI.2026.3745142", arxiv: "https://arxiv.org/abs/2406.05039", code: "https://github.com/zyn213/TempRMOT" } },
    { year: 2026, authors: "Yuxuan Xiao, Shanshan Zhang, Shengcai Liao, Jian Yang",
      title: "Two-Stage Prompt Learning: A Unified Framework for Person ReID without Clothing Hypothesis",
      venue: "IEEE Transactions on Multimedia", short: "TMM", extra: "Early Access",
      links: { paper: "https://doi.org/10.1109/TMM.2026.3753152", arxiv: "https://arxiv.org/abs/2611.19939" } },
    { year: 2026, authors: "Zhengquan Luo, Xuhui Li, Changyou Chen, Dong An, Shengcai Liao, Peilin Zhao, Yunlong Wang, Zhiqiang Xu",
      title: "Federated Learning with Local-global Dual Matching Dataset Distillation",
      venue: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases", short: "ECML PKDD",
      links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-37654-1_16" } },
    { year: 2026, authors: "Yanan Wang, Shengcai Liao, Guangyi Liu, Xiaodan Liang",
      title: "Mind the RefGAP: Correcting Reference Attention in Diffusion-Based Visual Editing",
      short: "arXiv Preprint",
      links: { arxiv: "https://arxiv.org/abs/2609.35708", project: "https://yanan-wang-cs.github.io/RefGAP/" },
      featured: true, thumb: "assets/img/papers/refgap.webp",
      summary: "A training-free fix for reference-guided diffusion editors that barely look at the user's reference (in LoomVideo, edit-region queries give it under 1% of their attention). RefGAP measures the reference-attention mass at each layer during the forward pass and adds logit offsets: positive for edit-region queries to use the reference more, negative for keep-region queries to protect content outside the edit. Across seven image/video editors it improves identity fidelity in head and face swapping, and also transfers to virtual try-on and background replacement." },
    { year: 2026, authors: "Jiancong Ma, Kun Li, Jin Jiang, Shengcai Liao*",
      title: "SocialCoAct: Enabling and Benchmarking Egocentric Social Co-Action for VLM-Based Humanoid Robots",
      short: "arXiv Preprint",
      links: { arxiv: "https://arxiv.org/abs/2610.24559" },
      featured: true, thumb: "assets/img/papers/socialcoact.webp",
      summary: "Egocentric social co-action for VLM-based humanoid robots. SocialCoAct-Agent turns egocentric observations and dialogue history into a spoken reply plus an aligned sequence of atomic actions, executed in MuJoCo and on a physical humanoid. SocialCoAct-Bench, 423 human-verified questions from real multi-party interactions, tests long-episode understanding, speaker intention and coordinated action planning; the best VLM reaches only 46.51% on its hard subset." },
    { year: 2026, authors: "Jin Jiang, Kun Li, Jiancong Ma, Shengcai Liao*",
      title: "Talk, Render, Act: Integrating Social Gesture and Digital Face with Synchronized Speech for Conversational Humanoid Robot",
      short: "arXiv Preprint",
      links: { arxiv: "https://arxiv.org/abs/2610.06153", project: "https://trabot-humanoid.github.io/" },
      featured: true, thumb: "assets/img/papers/trabot.webp",
      summary: "An agent-based framework (TRABot) that lets a full-body humanoid robot talk, show an expressive digital face and gesture in sync. Long-form motion is segmented into robot-ready semantic motion atoms, a semantic-conditioned planner composes them to match the meaning and timing of each spoken reply, and a streaming face–speech–body system runs the whole loop in real time on a physical Unitree G1." },
    { year: 2026, authors: "Jin Jiang, Jia Wang, Panwen Hu, Weiran Zhao, Shengcai Liao*",
      title: "FADRA: Frequency-Aware Diffusion with Residual Adaptation for Video Face Restoration",
      short: "arXiv Preprint",
      links: { arxiv: "https://arxiv.org/abs/2607.06389", project: "https://fadra-vfr.github.io/" },
      featured: true, thumb: "assets/img/papers/fadra.webp",
      summary: "Video face restoration built on a frozen text-to-video diffusion prior, adapted with LoRA and an LQ pixel-alignment fusion module. A Repeated Residual Adaptation Head revisits the degraded input at every flow-matching step, and a Frequency-Aware Loss supervises perceptually important frequency bands, giving sharp, flicker-free faces and the best results on VFHQ and CelebV-HQ." },
    { year: 2026, authors: "Yuxuan Xiao, Shanshan Zhang, Jian Yang, Shengcai Liao",
      title: "Beyond Facial Consistency: Personalized Person Image Generation with Holistic Identity Preservation",
      short: "arXiv Preprint",
      links: { arxiv: "https://arxiv.org/abs/2607.25622" },
      featured: true, thumb: "assets/img/papers/beyond-facial-consistency.webp",
      summary: "Personalized person image generation that keeps both the face and the overall appearance of the subject. A dual-branch baseline unifies local facial control and global appearance control, and Dynamic Balancing Scaling (DBS) coordinates the two with adaptive temporal gating along the denoising trajectory and region-aware optimization, curbing face-branch over-dominance. Comes with Pexels-100, a benchmark for holistic identity consistency." },
    { year: 2026, authors: "Yingfeng Wang, Yuxuan Xiao, Shengcai Liao",
      title: "Head Similarity: Modeling Structured Whole-Head Appearance Beyond Face Recognition",
      short: "arXiv Preprint",
      links: { arxiv: "https://arxiv.org/abs/2605.07766" },
      featured: true, thumb: "assets/img/papers/head-similarity.webp",
      summary: "Head Similarity extends identity-centric face recognition to structured whole-head similarity, capturing appearance changes such as hairstyle and styling within the same identity and ordering similarity across identity and appearance states, so heads can be compared even under occlusion or from behind. A large-scale benchmark is built from long-form videos, and a framework with hierarchical supervision and identity-aware distillation shows where conventional face recognition falls short." },
    { year: 2026, authors: "Yutong Zhang, Jiaxin Chen, Honglin Chen, Kaiqi Zheng, Shengcai Liao, Hanwen Zhong, Weixin Li, Yunhong Wang",
      title: "Memory-Efficient Transfer Learning with Fading Side Networks via Masked Dual Path Distillation",
      venue: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition", short: "CVPR",
      links: { paper: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Memory-Efficient_Transfer_Learning_with_Fading_Side_Networks_via_Masked_Dual_CVPR_2026_paper.html", arxiv: "https://arxiv.org/abs/2604.09088" } },
    { year: 2026, authors: "Kun Li, Jihao Gu, Fei Wang, Zhiliang Wu, Hehe Fan, Dan Guo",
      title: "MA-Bench: Towards Fine-grained Micro-Action Understanding",
      venue: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition", short: "CVPR",
      links: { paper: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_MA-Bench_Towards_Fine-grained_Micro-Action_Understanding_CVPR_2026_paper.html", arxiv: "https://arxiv.org/abs/2603.26586", project: "https://ma-bench.github.io/" } },
    { year: 2026, authors: "Jiehui Huang, Xiao Dong, Wenhui Song, Zheng Chong, Zhenchao Tang, Jun Zhou, Yuhao Cheng, Long Chen, Hanhui Li, Yiqiang Yan, Shengcai Liao*, Xiaodan Liang",
      title: "ConsistentID: Portrait Generation with Multimodal Fine-Grained Identity Preserving",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence", short: "TPAMI", extra: "Vol. 48, No. 5, pp. 5639–5654",
      links: { paper: "https://doi.org/10.1109/TPAMI.2026.3652557", arxiv: "https://arxiv.org/abs/2404.16771", code: "https://github.com/JackAILab/ConsistentID", project: "https://ssugarwh.github.io/consistentid.github.io/" },
      featured: true, thumb: "assets/img/papers/consistentid.webp",
      summary: "Identity-preserving portrait generation from a single reference photo. A multimodal facial prompt generator combines facial features, facial descriptions and the overall face context, and an ID-preservation network with facial attention localization keeps fine-grained identity details. Comes with FGID, a fine-grained portrait dataset of 500K+ images." },
    { year: 2026, authors: "Yutong Zhang, Zimeng Wu, Shengcai Liao, Shujiang Wu, Jiaxin Chen",
      title: "MP-ISMoE: Mixed-Precision Interactive Side Mixture-of-Experts for Efficient Transfer Learning",
      venue: "Proceedings of the AAAI Conference on Artificial Intelligence", short: "AAAI",
      links: { paper: "https://ojs.aaai.org/index.php/AAAI/article/view/40084", arxiv: "https://arxiv.org/abs/2605.04058" } },
    { year: 2026, authors: "Jin Jiang, Shengcai Liao*, Haibo Jin, Xiaoyuan Yang",
      title: "Trans3DHead: A Multi-Task Transformer for 3D Head Alignment",
      venue: "International Journal of Machine Learning and Cybernetics", short: "IJMLC", extra: "Vol. 17, No. 4, Article 180",
      links: { paper: "https://link.springer.com/article/10.1007/s13042-026-03038-z" } },

    { year: 2025, authors: "Yanan Wang, Shengcai Liao*, Panwen Hu, Xin Li, Fan Yang, Guangyi Liu, Xiaodan Liang",
      title: "DirectSwap: Paired, Mask-Free Video Head Swapping with Full-Reference Evaluation",
      short: "arXiv Preprint",
      links: { arxiv: "https://arxiv.org/abs/2512.09417", project: "https://yanan-wang-cs.github.io/DirectSwap/" },
      featured: true, thumb: "assets/img/papers/directswap.webp",
      summary: "Mask-free video head swapping trained with real cross-identity supervision. An identity–expression decoupled synthesis pipeline builds HeadSwapBench, the first cross-identity paired dataset for this task, with frame-aligned real videos as ground truth for training and full-reference evaluation. DirectSwap then swaps the whole head while keeping the driving video's pose, expression and motion." },
    { year: 2025, authors: "Jin Jiang, Shengcai Liao*, Xiaoyuan Yang, Kangqing Shen",
      title: "EAMNet: Efficient Adaptive Mamba Network for Infrared Small Target Detection",
      venue: "IEEE Transactions on Geoscience and Remote Sensing", short: "TGRS", extra: "Vol. 63, Article 5008517",
      links: { paper: "https://ieeexplore.ieee.org/document/11175477", code: "https://github.com/jiangjin1246/EAMNet" } },
    { year: 2025, authors: "Zutao Jiang, Guian Fang, Jianhua Han, Guansong Lu, Hang Xu, Shengcai Liao, Xiaojun Chang, Xiaodan Liang",
      title: "RealignDiff: Boosting Text-to-Image Diffusion Model with Coarse-to-fine Semantic Re-alignment",
      venue: "IEEE Transactions on Neural Networks and Learning Systems", short: "TNNLS", extra: "Vol. 36, No. 10, pp. 19010–19023",
      links: { paper: "https://doi.org/10.1109/TNNLS.2025.3584554", arxiv: "https://arxiv.org/abs/2305.19599" },
      featured: true, thumb: "assets/img/papers/realigndiff.webp",
      summary: "Two-stage, coarse-to-fine semantic re-alignment for text-to-image diffusion models. The coarse stage uses a BLIP-2-based caption reward to measure how well a generated image matches the prompt; the fine stage refines local regions with dense captions and a re-weighting attention modulation module, improving both visual quality and text–image alignment on MS-COCO and ViLG-300." },
    { year: 2025, authors: "Yichao Yan, Junjie Li, Shengcai Liao, Jie Qin",
      title: "TAL: Two-Stream Adaptive Learning for Generalizable Person Re-identification",
      venue: "Machine Intelligence Research", short: "MIR", extra: "Vol. 22, No. 2, pp. 337–351",
      links: { paper: "https://link.springer.com/article/10.1007/s11633-024-1516-2", arxiv: "https://arxiv.org/abs/2111.14290" } },
    { year: 2025, authors: "Qingzhi He, Yizhen Jia, Wentong Li, Shengcai Liao, Rong Quan, Tong Cui, Jie Qin",
      title: "Large Models are Good Annotators for Zero-Shot Learning",
      venue: "International ACM SIGIR Conference on Research and Development in Information Retrieval", short: "SIGIR",
      links: { paper: "https://doi.org/10.1145/3726302.3730219" } },
    { year: 2025, authors: "Sanoojan Baliah, Qinliang Lin, Shengcai Liao, Xiaodan Liang, Muhammad Haris Khan",
      title: "Realistic and Efficient Face Swapping: A Unified Approach with Diffusion Models",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision", short: "WACV",
      links: { paper: "https://openaccess.thecvf.com/content/WACV2025/html/Baliah_Realistic_and_Efficient_Face_Swapping_A_Unified_Approach_with_Diffusion_WACV_2025_paper.html", arxiv: "https://arxiv.org/abs/2409.07269", code: "https://github.com/Sanoojan/REFace" } },

    { year: 2024, authors: "Guian Fang, Wenbiao Yan, Yuanfan Guo, Jianhua Han, Zutao Jiang, Hang Xu, Shengcai Liao, Xiaodan Liang",
      title: "HumanRefiner: Benchmarking Abnormal Human Generation and Refining with Coarse-to-fine Pose-Reversible Guidance",
      venue: "European Conference on Computer Vision", short: "ECCV",
      links: { paper: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/4696_ECCV_2024_paper.php", arxiv: "https://arxiv.org/abs/2407.06937" },
      featured: true, listed: false, thumb: "assets/img/papers/humanrefiner.webp",
      summary: "A plug-and-play refiner for distorted limbs and other anatomical errors in text-to-image human generation. It builds on AbHuman, the first large-scale benchmark of human anomalies (56K synthesized images, 147K box-level labels in 18 categories), and corrects poses and local details coarse-to-fine with pose-reversible guidance, improving limb quality 2.9× over SDXL." }
  ]
};
