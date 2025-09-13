// AI Tools Data
const aiTools = [
    // Email & Productivity
    { name: "Superhuman", category: "email", description: "AI-powered email client with productivity features", url: "https://superhuman.com", pricing: "paid", features: ["Email organization", "AI scheduling", "Read receipts"] },
    { name: "Lavender", category: "email", description: "AI email assistant for sales professionals", url: "https://lavender.ai", pricing: "freemium", features: ["Email personalization", "Follow-up reminders", "Analytics"] },
    { name: "Gmail Duet AI", category: "email", description: "Google's AI assistant for Gmail", url: "https://workspace.google.com/products/gmail/duet-ai", pricing: "freemium", features: ["Smart compose", "Email summarization", "Priority inbox"] },
    { name: "Flowrite", category: "email", description: "AI writing assistant for emails and messages", url: "https://flowrite.com", pricing: "freemium", features: ["Email templates", "Tone adjustment", "Multi-language"] },
    { name: "Boomerang Respondable", category: "email", description: "AI assistant for writing better emails", url: "https://boomeranggmail.com/respondable", pricing: "freemium", features: ["Response scoring", "Writing insights", "Follow-up scheduling"] },
    // Miscellaneous Magic
    { name: "Tome", category: "misc", description: "AI-powered storytelling and presentation tool", url: "https://tome.app", pricing: "freemium", features: ["Story generation", "Presentation creation", "AI narration"] },
    { name: "Notion AI", category: "misc", description: "AI writing assistant in Notion workspace", url: "https://notion.so/ai", pricing: "freemium", features: ["Content generation", "Summarization", "Task automation"] },
    { name: "Fireflies AI", category: "misc", description: "AI meeting assistant that records and transcribes", url: "https://fireflies.ai", pricing: "freemium", features: ["Meeting transcription", "Summary generation", "Action items"] },
    { name: "Otter AI", category: "misc", description: "AI-powered transcription service", url: "https://otter.ai", pricing: "freemium", features: ["Real-time transcription", "Speaker identification", "Keyword highlights"] },
    { name: "ChatDoc", category: "misc", description: "AI chatbot for document analysis", url: "https://chatdoc.com", pricing: "freemium", features: ["Document Q&A", "Content extraction", "Multi-format support"] },
    { name: "Humata AI", category: "misc", description: "AI for PDF analysis and Q&A", url: "https://humata.ai", pricing: "freemium", features: ["PDF summarization", "Question answering", "Citation tracking"] },
    { name: "Glasp", category: "misc", description: "AI-powered social web highlighter", url: "https://glasp.co", pricing: "free", features: ["Web highlighting", "Knowledge management", "Social sharing"] },
    { name: "Beautiful.AI", category: "misc", description: "AI-powered presentation software", url: "https://beautiful.ai", pricing: "freemium", features: ["Smart templates", "Design suggestions", "Real-time collaboration"] },
    { name: "PromptHero", category: "misc", description: "Library of AI prompts for various models", url: "https://prompthero.com", pricing: "free", features: ["Prompt library", "Model examples", "Community sharing"] },
    // Research & Learning
    { name: "Perplexity AI", category: "research", description: "AI-powered answer engine", url: "https://perplexity.ai", pricing: "free", features: ["Real-time answers", "Source citations", "Follow-up questions"] },
    { name: "SciSpace", category: "research", description: "AI platform for scientific research", url: "https://typeset.io", pricing: "freemium", features: ["Paper analysis", "Citation extraction", "Research assistance"] },
    { name: "Elicit", category: "research", description: "AI research assistant that helps find papers", url: "https://elicit.org", pricing: "freemium", features: ["Paper discovery", "Summarization", "Concept extraction"] },
    { name: "Explainpaper", category: "research", description: "AI tool to explain academic papers", url: "https://explainpaper.com", pricing: "freemium", features: ["Paper simplification", "Concept explanation", "Q&A"] },
    { name: "Scholarcy", category: "research", description: "AI-powered summarization of research papers", url: "https://scholarcy.com", pricing: "freemium", features: ["Flashcard generation", "Summary extraction", "Reference management"] },
    // Video & Audio
    { name: "Descript", category: "video", description: "AI-powered video and podcast editing", url: "https://descript.com", pricing: "freemium", features: ["Text-based editing", "Overdub voice", "Screen recording"] },
    { name: "OpusClip", category: "video", description: "AI tool for turning long videos into viral clips", url: "https://opus.pro", pricing: "freemium", features: ["Video repurposing", "Clip generation", "Auto-captioning"] },
    { name: "Pictory", category: "video", description: "AI video creation from text", url: "https://pictory.ai", pricing: "freemium", features: ["Text-to-video", "Article-to-video", "Auto-captioning"] },
    { name: "Synthesia", category: "video", description: "AI video generation with avatars", url: "https://synthesia.io", pricing: "paid", features: ["AI avatars", "Multi-language", "Template library"] },
    { name: "ElevenLabs", category: "video", description: "AI voice synthesis and cloning", url: "https://elevenlabs.io", pricing: "freemium", features: ["Voice cloning", "Voice design", "Emotional control"] },
    { name: "AIVA", category: "video", description: "AI music composition assistant", url: "https://aiva.ai", pricing: "freemium", features: ["Music generation", "Style customization", "Royalty-free"] },
    { name: "Durable AI", category: "video", description: "AI website builder in 30 seconds", url: "https://durable.co", pricing: "freemium", features: ["Instant websites", "AI copywriting", "Analytics"] },
    { name: "Browse AI", category: "video", description: "AI web scraping and monitoring", url: "https://browse.ai", pricing: "freemium", features: ["Web scraping", "Data monitoring", "Integration"] },
    { name: "Bardeen", category: "video", description: "AI workflow automation", url: "https://bardeen.ai", pricing: "freemium", features: ["Workflow automation", "AI app building", "Integration"] },
    { name: "Taskade AI", category: "video", description: "AI task and project management", url: "https://taskade.com", pricing: "freemium", features: ["Task automation", "Mind mapping", "Collaboration"] },
    { name: "Magical", category: "video", description: "AI automation for meetings and tasks", url: "https://magical.so", pricing: "free", features: ["Meeting automation", "Task scheduling", "Templates"] },
    // Job-Search & Career Growth
    { name: "Teal", category: "career", description: "AI-powered job search and career platform", url: "https://tealhq.com", pricing: "freemium", features: ["Job tracking", "Resume analysis", "Company insights"] },
    { name: "Kickresume", category: "career", description: "AI resume builder and career tools", url: "https://kickresume.com", pricing: "freemium", features: ["Resume templates", "AI writing", "Cover letters"] },
    { name: "ResumAI", category: "career", description: "AI resume optimization tool", url: "https://resumai.com", pricing: "freemium", features: ["Resume optimization", "Keyword analysis", "ATS scoring"] },
    { name: "LinkedIn Career Coach AI", category: "career", description: "AI career coaching on LinkedIn", url: "https://linkedin.com", pricing: "free", features: ["Career advice", "Profile optimization", "Job recommendations"] },
    { name: "VMock", category: "career", description: "AI resume feedback and optimization", url: "https://vmock.com", pricing: "freemium", features: ["Resume scoring", "Feedback reports", "Optimization tips"] },
    { name: "PrepAI", category: "career", description: "AI interview preparation tool", url: "https://prep.ai", pricing: "freemium", features: ["Mock interviews", "Feedback", "Question bank"] },
    // Coding & Development
    { name: "GitHub Copilot", category: "coding", description: "AI pair programmer for code completion", url: "https://github.com/features/copilot", pricing: "paid", features: ["Code completion", "Documentation", "Multi-language"] },
    { name: "Replit Ghostwriter", category: "coding", description: "AI coding assistant in Replit", url: "https://replit.com", pricing: "freemium", features: ["Code completion", "Code explanation", "Debugging"] },
    { name: "Tabnine", category: "coding", description: "AI code completion tool", url: "https://tabnine.com", pricing: "freemium", features: ["Code completion", "Whole-line completion", "Multi-language"] },
    { name: "Codeium", category: "coding", description: "AI code completion and chat", url: "https://codeium.com", pricing: "free", features: ["Code completion", "Chat assistant", "Search"] },
    { name: "Mutable AI", category: "coding", description: "AI for code explanation and refactoring", url: "https://mutable.ai", pricing: "freemium", features: ["Code explanation", "Refactoring", "Test generation"] },
    { name: "Codium AI", category: "coding", description: "AI code analysis and test generation", url: "https://codium.ai", pricing: "freemium", features: ["Test generation", "Code analysis", "Documentation"] },
    { name: "Snyk AI", category: "coding", description: "AI-powered code security", url: "https://snyk.io", pricing: "freemium", features: ["Vulnerability detection", "Code fixing", "License compliance"] },
    // Writing & Content Creation
    { name: "ChatGPT", category: "writing", description: "OpenAI's conversational AI model", url: "https://chat.openai.com", pricing: "freemium", features: ["Conversation", "Content generation", "Code assistance"] },
    { name: "Claude AI", category: "writing", description: "Anthropic's AI assistant", url: "https://claude.ai", pricing: "freemium", features: ["Long context", "Analysis", "Content creation"] },
    { name: "Jasper", category: "writing", description: "AI content generation platform", url: "https://jasper.ai", pricing: "paid", features: ["Content templates", "Brand voice", "SEO optimization"] },
    { name: "Copy.AI", category: "writing", description: "AI writing assistant for marketers", url: "https://copy.ai", pricing: "freemium", features: ["Marketing copy", "Blog posts", "Social media"] },
    { name: "Writesonic", category: "writing", description: "AI content creation tool", url: "https://writesonic.com", pricing: "freemium", features: ["Article writing", "Ad copy", "Product descriptions"] },
    { name: "Sudowrite", category: "writing", description: "AI writing tool for fiction authors", url: "https://sudowrite.com", pricing: "paid", features: ["Story generation", "Character development", "Plot assistance"] },
    { name: "QuillBot", category: "writing", description: "AI paraphrasing and writing tool", url: "https://quillbot.com", pricing: "freemium", features: ["Paraphrasing", "Grammar check", "Summarization"] },
    { name: "Grammarly", category: "writing", description: "AI-powered writing assistant", url: "https://grammarly.com", pricing: "freemium", features: ["Grammar check", "Tone detection", "Clarity suggestions"] },
    { name: "Wordtune", category: "writing", description: "AI writing improvement tool", url: "https://wordtune.com", pricing: "freemium", features: ["Rewriting", "Tone adjustment", "Sentence improvement"] },
    // Design & Creativity
    { name: "Canva Magic Studio", category: "design", description: "AI design features in Canva", url: "https://canva.com/magic-studio", pricing: "freemium", features: ["Image generation", "Text effects", "Design suggestions"] },
    { name: "Midjourney", category: "design", description: "AI image generation through Discord", url: "https://midjourney.com", pricing: "paid", features: ["Image generation", "Style transfer", "High resolution"] },
    { name: "DALL·E", category: "design", description: "OpenAI's image generation model", url: "https://openai.com/dall-e-2", pricing: "freemium", features: ["Image generation", "Editing", "Variations"] },
    { name: "Figma AI", category: "design", description: "AI features in Figma design tool", url: "https://figma.com", pricing: "freemium", features: ["Design suggestions", "Prototyping", "Collaboration"] },
    { name: "Runway ML", category: "design", description: "AI video and image creation", url: "https://runwayml.com", pricing: "freemium", features: ["Video editing", "Image generation", "Green screen"] },
    { name: "Adobe Firefly", category: "design", description: "Adobe's generative AI models", url: "https://firefly.adobe.com", pricing: "freemium", features: ["Image generation", "Text effects", "Generative fill"] },
    { name: "Looka", category: "design", description: "AI logo and brand design", url: "https://looka.com", pricing: "freemium", features: ["Logo generation", "Brand kit", "Business card design"] },
    { name: "Khroma", category: "design", description: "AI color palette generator", url: "https://khroma.co", pricing: "free", features: ["Color palette generation", "Color locking", "Export options"] },
    // Extra Reels – Video / Voice / Image
    { name: "VEED.IO", category: "reels", description: "AI-powered video editing platform", url: "https://veed.io", pricing: "freemium", features: ["Video editing", "Subtitles", "Screen recording"] },
    { name: "Riverside", category: "reels", description: "AI-powered recording and podcasting", url: "https://riverside.fm", pricing: "freemium", features: ["Recording", "Transcription", "Separate tracks"] },
    { name: "Vozo (AI Dubbing)", category: "reels", description: "AI video dubbing and translation", url: "https://vozo.ai", pricing: "freemium", features: ["Video dubbing", "Translation", "Lip sync"] },
    { name: "AiMensa", category: "reels", description: "AI content creation platform", url: "https://aimensa.com", pricing: "free", features: ["Content generation", "Templates", "Collaboration"] },
    { name: "Flair AI", category: "reels", description: "AI product photography", url: "https://flair.ai", pricing: "freemium", features: ["Product photography", "Background removal", "Brand consistency"] },
    { name: "HyperWrite", category: "reels", description: "AI writing assistant", url: "https://hyperwriteai.com", pricing: "freemium", features: ["Content generation", "Auto-complete", "Flexibility"] },
    { name: "Pummi (AI Stock Images)", category: "reels", description: "AI stock image generation", url: "https://pummi.ai", pricing: "freemium", features: ["Stock images", "Custom generation", "High resolution"] },
    { name: "Artflow", category: "reels", description: "AI animated video creation", url: "https://artflow.ai", pricing: "freemium", features: ["Animation", "Character creation", "Story generation"] },
    { name: "Invideo AI", category: "reels", description: "AI video creation from text", url: "https://invideo.io", pricing: "freemium", features: ["Text-to-video", "Templates", "Media library"] },
    { name: "Immersity AI", category: "reels", description: "AI 2D to 3D image conversion", url: "https://immersity.ai", pricing: "freemium", features: ["2D to 3D", "Depth maps", "Animation"] },
    { name: "MindStudio", category: "reels", description: "AI app builder without coding", url: "https://mindstudio.ai", pricing: "freemium", features: ["No-code apps", "AI workflows", "Integration"] },
    { name: "Leonardo.AI", category: "reels", description: "AI image generation platform", url: "https://leonardo.ai", pricing: "freemium", features: ["Image generation", "Model training", "Community models"] },
    { name: "Descript", category: "reels", description: "AI video and audio editing", url: "https://descript.com", pricing: "freemium", features: ["Text-based editing", "Overdub", "Screen recording"] },
    { name: "Pika", category: "reels", description: "AI video generation tool", url: "https://pika.art", pricing: "freemium", features: ["Video generation", "Animation", "Style transfer"] },
    { name: "ideogram", category: "reels", description: "AI text-to-image generation", url: "https://ideogram.ai", pricing: "free", features: ["Text-to-image", "Typography", "Style control"] },
    { name: "Runway", category: "reels", description: "AI video creation and editing", url: "https://runwayml.com", pricing: "freemium", features: ["Video editing", "Green screen", "Motion tracking"] },
    { name: "Pika Labs", category: "reels", description: "AI video generation platform", url: "https://pika.art", pricing: "free", features: ["Video generation", "Animation", "Style transfer"] },
    { name: "Notion", category: "reels", description: "AI-powered workspace", url: "https://notion.so", pricing: "freemium", features: ["Note-taking", "Databases", "AI assistance"] },
    { name: "QuillBot", category: "reels", description: "AI paraphrasing tool", url: "https://quillbot.com", pricing: "freemium", features: ["Paraphrasing", "Grammar check", "Summarization"] },
    { name: "Grammarly", category: "reels", description: "AI writing assistant", url: "https://grammarly.com", pricing: "freemium", features: ["Grammar check", "Tone detection", "Clarity"] },
    { name: "Replygrow", category: "reels", description: "AI for social media engagement", url: "https://replygrow.com", pricing: "freemium", features: ["Engagement automation", "Analytics", "Content scheduling"] },
    { name: "CapCut", category: "reels", description: "AI video editing tool", url: "https://capcut.com", pricing: "free", features: ["Video editing", "Effects", "Templates"] },
    { name: "ClickUp", category: "reels", description: "AI productivity platform", url: "https://clickup.com", pricing: "freemium", features: ["Task management", "AI assistance", "Collaboration"] },
    { name: "EDOM.AI", category: "reels", description: "AI business strategy assistant", url: "https://edom.ai", pricing: "freemium", features: ["Business strategy", "Market analysis", "Competitor research"] },
    // Faceless & Viral Content
    { name: "Contentpup", category: "viral", description: "AI content creation for social media", url: "https://contentpup.com", pricing: "freemium", features: ["Content generation", "Templates", "Scheduling"] },
    { name: "Syllaby", category: "viral", description: "AI for viral social media content", url: "https://syllaby.io", pricing: "freemium", features: ["Viral content", "Trend analysis", "Content calendar"] },
    { name: "Napkin (text→infographics)", category: "viral", description: "AI text to infographic creator", url: "https://napkin.ai", pricing: "freemium", features: ["Text-to-visual", "Infographics", "Templates"] },
    { name: "SORA", category: "viral", description: "OpenAI's video generation model", url: "https://openai.com/sora", pricing: "coming soon", features: ["Video generation", "Realistic scenes", "Text-to-video"] },
    { name: "Typegrow", category: "viral", description: "AI for Twitter growth", url: "https://typegrow.com", pricing: "freemium", features: ["Twitter growth", "Content scheduling", "Analytics"] },
    { name: "SENIE (prompt helper)", category: "viral", description: "AI prompt engineering assistant", url: "https://senie.ai", pricing: "free", features: ["Prompt engineering", "Optimization", "Templates"] },
    { name: "Perplexity", category: "viral", description: "AI-powered answer engine", url: "https://perplexity.ai", pricing: "free", features: ["Real-time answers", "Source citations", "Follow-up"] },
    { name: "Map This (PDF→mind-map)", category: "viral", description: "AI PDF to mind map converter", url: "https://mapthis.ai", pricing: "freemium", features: ["PDF analysis", "Mind mapping", "Visualization"] },
    { name: "ossa.ai", category: "viral", description: "AI content creation platform", url: "https://ossa.ai", pricing: "freemium", features: ["Content generation", "SEO optimization", "Templates"] },
    // Marketing & Ads
    { name: "Pencil", category: "marketing", description: "AI ad creative generation", url: "https://pencil.ai", pricing: "paid", features: ["Ad generation", "A/B testing", "Performance prediction"] },
    { name: "Merlin", category: "marketing", description: "AI marketing assistant", url: "https://merlin.foyer.work", pricing: "freemium", features: ["Marketing assistance", "Content ideas", "Strategy"] },
    { name: "Tinywow", category: "marketing", description: "AI file conversion and utilities", url: "https://tinywow.com", pricing: "free", features: ["File conversion", "Image tools", "PDF tools"] },
    { name: "Ai-Ads", category: "marketing", description: "AI advertising platform", url: "https://ai-ads.ai", pricing: "freemium", features: ["Ad creation", "Optimization", "Analytics"] },
    { name: "Adobe Sensei", category: "marketing", description: "Adobe's AI and machine learning", url: "https://adobe.com/sensei", pricing: "paid", features: ["Creative assistance", "Personalization", "Analytics"] },
    { name: "Simplifieo", category: "marketing", description: "AI marketing automation", url: "https://simplifieo.com", pricing: "freemium", features: ["Marketing automation", "Lead generation", "Campaigns"] },
    { name: "Personal AI", category: "marketing", description: "AI personal assistant", url: "https://personal.ai", pricing: "freemium", features: ["Personal assistance", "Memory", "Communication"] },
    { name: "AdCopy", category: "marketing", description: "AI ad copy generation", url: "https://adcopy.ai", pricing: "freemium", features: ["Ad copy", "Variations", "A/B testing"] },
    { name: "AdCreative", category: "marketing", description: "AI ad creative generation", url: "https://adcreative.ai", pricing: "freemium", features: ["Ad creative", "Templates", "Performance insights"] },
    // Social-Media
    { name: "Twemax", category: "social", description: "AI Twitter growth tool", url: "https://twemax.com", pricing: "freemium", features: ["Twitter growth", "Content scheduling", "Analytics"] },
    { name: "Ideas AI", category: "social", description: "AI idea generation for content", url: "https://ideasai.com", pricing: "free", features: ["Idea generation", "Brainstorming", "Creativity"] },
    { name: "Typeshare", category: "social", description: "AI content creation for social media", url: "https://typeshare.co", pricing: "freemium", features: ["Content creation", "Scheduling", "Analytics"] },
    { name: "Tribescaler", category: "social", description: "AI for Twitter content scaling", url: "https://tribescaler.com", pricing: "freemium", features: ["Content scaling", "Viral potential", "Analytics"] },
    { name: "Pitchgrade", category: "social", description: "AI pitch deck creation", url: "https://pitchgrade.com", pricing: "freemium", features: ["Pitch creation", "Investor targeting", "Templates"] },
    { name: "Blackmagic", category: "social", description: "AI content creation tool", url: "https://blackmagic.so", pricing: "free", features: ["Content creation", "Templates", "Automation"] },
    { name: "Validator AI", category: "social", description: "AI startup idea validation", url: "https://validatorai.com", pricing: "free", features: ["Idea validation", "Feedback", "Market analysis"] },
    // Logo Generators
    { name: "LogoAI.com", category: "logo", description: "AI logo design platform", url: "https://logoai.com", pricing: "freemium", features: ["Logo generation", "Brand kit", "Business card"] },
    { name: "Looka", category: "logo", description: "AI logo and brand kit creator", url: "https://looka.com", pricing: "freemium", features: ["Logo design", "Brand identity", "Business card"] },
    { name: "Brandmark", category: "logo", description: "AI logo design tool", url: "https://brandmark.io", pricing: "freemium", features: ["Logo generation", "Color palette", "Typography"] },
    { name: "Designs AI", category: "logo", description: "AI design platform including logos", url: "https://designs.ai", pricing: "freemium", features: ["Logo design", "Brand kit", "Social media"] },
    { name: "Namecheap", category: "logo", description: "AI logo maker by Namecheap", url: "https://namecheap.com/logo-maker", pricing: "free", features: ["Logo generation", "Templates", "Customization"] },
    // UI / UX
    { name: "Figma", category: "ui", description: "Design tool with AI features", url: "https://figma.com", pricing: "freemium", features: ["Design", "Prototyping", "Collaboration"] },
    { name: "Uizard", category: "ui", description: "AI-powered UI design tool", url: "https://uizard.io", pricing: "freemium", features: ["UI generation", "Wireframing", "Prototyping"] },
    { name: "UiMagic", category: "ui", description: "AI UI design generator", url: "https://uimagic.design", pricing: "freemium", features: ["UI generation", "Design suggestions", "Templates"] },
    { name: "Photoshop", category: "ui", description: "Adobe Photoshop with AI features", url: "https://adobe.com/photoshop", pricing: "paid", features: ["Image editing", "AI features", "Design tools"] },
    // Design (general)
    { name: "Canva", category: "general", description: "Online design platform with AI", url: "https://canva.com", pricing: "freemium", features: ["Design templates", "AI features", "Collaboration"] },
    { name: "Flair AI", category: "general", description: "AI product photography", url: "https://flair.ai", pricing: "freemium", features: ["Product photography", "Background removal", "Brand consistency"] },
    { name: "Designify", category: "general", description: "AI design enhancement tool", url: "https://designify.ai", pricing: "freemium", features: ["Image enhancement", "Background removal", "Upscaling"] },
    { name: "Clipdrop", category: "general", description: "AI image editing tools", url: "https://clipdrop.co", pricing: "freemium", features: ["Background removal", "Image cleanup", "Relighting"] },
    { name: "Autodraw", category: "general", description: "AI drawing tool by Google", url: "https://autodraw.com", pricing: "free", features: ["Drawing assistance", "Shape recognition", "Sketching"] },
    { name: "Magician design", category: "general", description: "AI design tools for Figma", url: "https://magician.design", pricing: "free", features: ["Design assistance", "Icon generation", "Content creation"] },
    // Audio / Voice
    { name: "Lovo AI", category: "audio", description: "AI voice generation platform", url: "https://lovo.ai", pricing: "freemium", features: ["Voice generation", "Voice cloning", "Emotions"] },
    { name: "ElevenLabs", category: "audio", description: "AI voice synthesis and cloning", url: "https://elevenlabs.io", pricing: "freemium", features: ["Voice synthesis", "Voice cloning", "Languages"] },
    { name: "Songburst AI", category: "audio", description: "AI music generation", url: "https://songburst.ai", pricing: "freemium", features: ["Music generation", "Styles", "Customization"] },
    { name: "Adobe Podcast", category: "audio", description: "AI-powered podcast editing", url: "https://podcast.adobe.com", pricing: "freemium", features: ["Audio enhancement", "Noise removal", "Transcription"] },
    { name: "Auphonic", category: "audio", description: "AI audio post-production", url: "https://auphonic.com", pricing: "freemium", features: ["Audio leveling", "Noise reduction", "Loudness normalization"] },
    { name: "Descript", category: "audio", description: "AI audio and video editing", url: "https://descript.com", pricing: "freemium", features: ["Text-based editing", "Overdub", "Transcription"] },
    { name: "Speechify", category: "audio", description: "AI text-to-speech reader", url: "https://speechify.com", pricing: "freemium", features: ["Text-to-speech", "Listening speed", "Voices"] },
    { name: "Howler AI", category: "audio", description: "AI audio processing", url: "https://howler.ai", pricing: "freemium", features: ["Audio analysis", "Transcription", "Summarization"] },
    { name: "Suno AI", category: "audio", description: "AI music creation", url: "https://suno.ai", pricing: "free", features: ["Music generation", "Styles", "Customization"] },
    { name: "Udio", category: "audio", description: "AI music generation", url: "https://udio.com", pricing: "free", features: ["Music generation", "Collaboration", "Sharing"] },
    { name: "Beatoven AI", category: "audio", description: "AI background music creation", url: "https://beatoven.ai", pricing: "freemium", features: ["Background music", "Mood selection", "Customization"] },
    // Chatbots & Assistants
    { name: "Chatbase", category: "chatbots", description: "Custom chatbot builder", url: "https://chatbase.co", pricing: "freemium", features: ["Chatbot builder", "Integration", "Analytics"] },
    { name: "Droxy", category: "chatbots", description: "AI chatbot for websites", url: "https://droxy.ai", pricing: "freemium", features: ["Website chatbot", "Lead generation", "Support"] },
    { name: "Chatsimple", category: "chatbots", description: "Simple chatbot creation", url: "https://chatsimple.ai", pricing: "freemium", features: ["Chatbot builder", "Templates", "Integration"] },
    { name: "Mybot.chat", category: "chatbots", description: "Custom chatbot builder", url: "https://mybot.chat", pricing: "freemium", features: ["Chatbot builder", "NLP", "Integration"] },
    { name: "Mutual info", category: "chatbots", description: "AI information analysis", url: "https://mutualinfo.com", pricing: "free", features: ["Information analysis", "Data insights", "Visualization"] },
    { name: "Chatfuel", category: "chatbots", description: "Chatbot for messaging platforms", url: "https://chatfuel.com", pricing: "freemium", features: ["Messenger bots", "Automation", "Analytics"] },
    { name: "Sendbird", category: "chatbots", description: "Chat and messaging API", url: "https://sendbird.com", pricing: "freemium", features: ["Chat API", "Messaging", "Voice/video"] },
    { name: "Monica.im", category: "chatbots", description: "AI personal assistant", url: "https://monica.im", pricing: "freemium", features: ["Personal assistant", "Web integration", "Task management"] },
    { name: "Personal AI", category: "chatbots", description: "Personal AI assistant", url: "https://personal.ai", pricing: "freemium", features: ["Memory", "Communication", "Personalization"] },
    { name: "Poe", category: "chatbots", description: "AI chat platform by Quora", url: "https://poe.com", pricing: "free", features: ["Multiple models", "Chat history", "Explore"] },
    { name: "Alethea", category: "chatbots", description: "AI character creation", url: "https://alethea.ai", pricing: "freemium", features: ["Character creation", "Personality", "Voice"] },
    { name: "HuggingChat", category: "chatbots", description: "Open-source AI chat", url: "https://huggingface.co/chat", pricing: "free", features: ["Open source", "Multiple models", "Web search"] },
    { name: "Spice AI", category: "chatbots", description: "AI for time-series data", url: "https://spice.ai", pricing: "free", features: ["Time-series", "Forecasting", "Data analysis"] },
    // Automation & Integration
    { name: "Make (ex-Integromat)", category: "automation", description: "Visual automation platform", url: "https://make.com", pricing: "freemium", features: ["Workflow automation", "Integration", "Visual builder"] },
    { name: "Zapier", category: "automation", description: "Workflow automation platform", url: "https://zapier.com", pricing: "freemium", features: ["Workflow automation", "Integration", "Templates"] },
    { name: "Bardeen", category: "automation", description: "AI automation for workflows", url: "https://bardeen.ai", pricing: "freemium", features: ["Workflow automation", "AI assistance", "Integration"] },
    { name: "Xembly", category: "automation", description: "AI executive assistant", url: "https://xembly.com", pricing: "freemium", features: ["Meeting assistance", "Task automation", "Scheduling"] },
    { name: "Integrately", category: "automation", description: "Automation integration platform", url: "https://integrately.com", pricing: "freemium", features: ["Integration", "Automation", "Templates"] },
    { name: "N8n", category: "automation", description: "Workflow automation tool", url: "https://n8n.io", pricing: "freemium", features: ["Workflow automation", "Self-hosted", "Integration"] },
    { name: "Monday.com", category: "automation", description: "Work management with AI", url: "https://monday.com", pricing: "freemium", features: ["Project management", "Automation", "Collaboration"] },
    { name: "Wrike", category: "automation", description: "Project management with AI", url: "https://wrike.com", pricing: "freemium", features: ["Project management", "Automation", "Reporting"] },
    // Prompt Libraries
    { name: "Prompts", category: "prompt", description: "AI prompt library", url: "https://prompts.chat", pricing: "free", features: ["Prompt library", "Categories", "Community"] },
    { name: "PromptBox", category: "prompt", description: "Prompt organization tool", url: "https://promptbox.ai", pricing: "freemium", features: ["Prompt organization", "Sharing", "Categories"] },
    { name: "Promptbase", category: "prompt", description: "Marketplace for quality prompts", url: "https://promptbase.com", pricing: "free", features: ["Prompt marketplace", "Selling", "Buying"] },
    { name: "Snack Prompt", category: "prompt", description: "AI prompt engineering tool", url: "https://snackprompt.com", pricing: "freemium", features: ["Prompt engineering", "Optimization", "Testing"] },
    { name: "AiPRM", category: "prompt", description: "Prompt management for ChatGPT", url: "https://aiprm.com", pricing: "freemium", features: ["ChatGPT integration", "Prompt management", "Templates"] },
    { name: "Wnr.ai", category: "prompt", description: "AI prompt generator", url: "https://wnr.ai", pricing: "freemium", features: ["Prompt generation", "Optimization", "Templates"] },
    { name: "PromptHero", category: "prompt", description: "Library of AI prompts", url: "https://prompthero.com", pricing: "free", features: ["Prompt library", "Model examples", "Community"] },
    { name: "Promptify.ai", category: "prompt", description: "AI prompt generation", url: "https://promptify.ai", pricing: "free", features: ["Prompt generation", "Categories", "Community"] },
    // Presentation Makers
    { name: "Decktopus", category: "presentation", description: "AI presentation generator", url: "https://decktopus.com", pricing: "freemium", features: ["Presentation generation", "Templates", "Design"] },
    { name: "Gamma AI", category: "presentation", description: "AI presentation creator", url: "https://gamma.app", pricing: "freemium", features: ["Presentation creation", "Web publishing", "Analytics"] },
    { name: "Slides AI", category: "presentation", description: "AI for Google Slides", url: "https://slidesai.io", pricing: "freemium", features: ["Slide generation", "Summarization", "Design"] },
    { name: "Alicent Ai", category: "presentation", description: "AI presentation assistant", url: "https://alicent.ai", pricing: "freemium", features: ["Presentation assistance", "Design", "Content"] },
    { name: "Beautiful.AI", category: "presentation", description: "AI-powered presentation software", url: "https://beautiful.ai", pricing: "freemium", features: ["Smart templates", "Design assistance", "Collaboration"] },
    { name: "Designs AI", category: "presentation", description: "AI design platform", url: "https://designs.ai", pricing: "freemium", features: ["Presentation design", "Templates", "Logos"] },
    { name: "Tome", category: "presentation", description: "AI storytelling and presentations", url: "https://tome.app", pricing: "freemium", features: ["Story generation", "Presentation", "AI narration"] },
    { name: "Pitch", category: "presentation", description: "Collaborative presentation software", url: "https://pitch.com", pricing: "freemium", features: ["Collaboration", "Analytics", "Templates"] },
    { name: "Presentations.AI", category: "presentation", description: "AI presentation generation", url: "https://presentations.ai", pricing: "freemium", features: ["Presentation generation", "Templates", "Design"] },
    { name: "Slidesgo", category: "presentation", description: "Presentation templates with AI", url: "https://slidesgo.com", pricing: "free", features: ["Templates", "AI assistance", "Education"] },
    { name: "Slidebean", category: "presentation", description: "AI presentation software", url: "https://slidebean.com", pricing: "freemium", features: ["Pitch decks", "Investor targeting", "Analytics"] },
    { name: "Prezi", category: "presentation", description: "AI-enhanced presentation tool", url: "https://prezi.com", pricing: "freemium", features: ["Zoomable UI", "Storytelling", "Templates"] },
    // Meeting Assistants
    { name: "Tldv", category: "meeting", description: "AI meeting recorder and summarizer", url: "https://tldv.io", pricing: "freemium", features: ["Recording", "Summarization", "Highlights"] },
    { name: "Noty AI", category: "meeting", description: "AI meeting notes and summaries", url: "https://noty.ai", pricing: "freemium", features: ["Meeting notes", "Summarization", "Action items"] },
    { name: "Otter", category: "meeting", description: "AI meeting transcription", url: "https://otter.ai", pricing: "freemium", features: ["Transcription", "Speaker identification", "Keywords"] },
    { name: "Fireflies", category: "meeting", description: "AI meeting assistant", url: "https://fireflies.ai", pricing: "freemium", features: ["Meeting recording", "Transcription", "Summarization"] },
    { name: "Avoma", category: "meeting", description: "AI meeting assistant and intelligence", url: "https://avoma.com", pricing: "freemium", features: ["Meeting intelligence", "CRM integration", "Analytics"] },
    { name: "Equal Time", category: "meeting", description: "AI meeting analytics", url: "https://equaltime.ai", pricing: "freemium", features: ["Participation analytics", "Meeting insights", "Fairness"] },
    { name: "Fathom", category: "meeting", description: "AI meeting recorder", url: "https://fathom.video", pricing: "free", features: ["Meeting recording", "Summarization", "Highlights"] },
    { name: "Fellow.App", category: "meeting", description: "AI meeting management", url: "https://fellow.app", pricing: "freemium", features: ["Meeting notes", "Action items", "Collaboration"] },
    { name: "Krisp", category: "meeting", description: "AI noise cancellation for meetings", url: "https://krisp.ai", pricing: "freemium", features: ["Noise cancellation", "Echo removal", "Voice isolation"] },
    // Website / Landing-Page Builders
    { name: "10Web", category: "website", description: "AI WordPress platform", url: "https://10web.io", pricing: "freemium", features: ["WordPress hosting", "AI optimization", "Security"] },
    { name: "Durable", category: "website", description: "AI website builder", url: "https://durable.co", pricing: "freemium", features: ["Instant websites", "AI copywriting", "Analytics"] },
    { name: "Framer", category: "website", description: "AI website design and hosting", url: "https://framer.com", pricing: "freemium", features: ["Web design", "Hosting", "CMS"] },
    { name: "LandingSite", category: "website", description: "AI landing page builder", url: "https://landingsite.ai", pricing: "freemium", features: ["Landing pages", "AI copywriting", "A/B testing"] },
    { name: "Mixo.io", category: "website", description: "AI website builder", url: "https://mixo.io", pricing: "freemium", features: ["Website builder", "AI content", "Analytics"] },
    { name: "Style AI", category: "website", description: "AI website styling", url: "https://style.ai", pricing: "freemium", features: ["Website styling", "Design suggestions", "Optimization"] },
    { name: "Wix", category: "website", description: "Website builder with AI features", url: "https://wix.com", pricing: "freemium", features: ["Website builder", "AI features", "Templates"] },
    { name: "Wegic", category: "website", description: "AI website builder", url: "https://wegic.ai", pricing: "freemium", features: ["Website builder", "AI assistance", "Templates"] },
    { name: "Softr AI", category: "website", description: "No-code web app builder with AI", url: "https://softr.io", pricing: "freemium", features: ["No-code apps", "Airtable integration", "AI features"] },
    { name: "Bubble", category: "website", description: "No-code web app builder", url: "https://bubble.io", pricing: "freemium", features: ["No-code apps", "Workflow", "Plugins"] },
    // SEO & Content Optimisation
    { name: "VidIQ", category: "seo", description: "AI for YouTube SEO", url: "https://vidiq.com", pricing: "freemium", features: ["YouTube SEO", "Keyword research", "Analytics"] },
    { name: "Seona AI", category: "seo", description: "AI SEO assistant", url: "https://seona.ai", pricing: "freemium", features: ["SEO optimization", "Content suggestions", "Ranking"] },
    { name: "BlogSEO", category: "seo", description: "AI for blog SEO", url: "https://blogseo.ai", pricing: "freemium", features: ["Blog SEO", "Content optimization", "Keyword research"] },
    { name: "Keywrds.ai", category: "seo", description: "AI keyword research", url: "https://keywrds.ai", pricing: "freemium", features: ["Keyword research", "Content ideas", "SEO analysis"] },
    { name: "SurferSEO", category: "seo", description: "AI SEO optimization tool", url: "https://surferseo.com", pricing: "paid", features: ["Content optimization", "Keyword research", "Competitor analysis"] },
    { name: "Labs.ai", category: "seo", description: "AI SEO tools", url: "https://labs.ai", pricing: "freemium", features: ["SEO tools", "Content optimization", "Analytics"] },
    { name: "Alli AI", category: "seo", description: "AI for SEO optimization", url: "https://alliai.com", pricing: "freemium", features: ["SEO automation", "Content optimization", "Reporting"] },
    { name: "WordLift", category: "seo", description: "AI SEO for WordPress", url: "https://wordlift.io", pricing: "freemium", features: ["WordPress SEO", "Structured data", "Knowledge graph"] },
    // Image Generators / Editors
    { name: "DALL·E 3", category: "image", description: "OpenAI's latest image generation model", url: "https://openai.com/dall-e-3", pricing: "freemium", features: ["Image generation", "Editing", "Variations"] },
    { name: "Midjourney V6", category: "image", description: "Latest version of Midjourney AI", url: "https://midjourney.com", pricing: "paid", features: ["Image generation", "High resolution", "Styles"] },
    { name: "Stable Diffusion 3", category: "image", description: "Latest Stable Diffusion model", url: "https://stability.ai", pricing: "free", features: ["Image generation", "Open source", "Customization"] },
    { name: "Adobe Firefly 3", category: "image", description: "Adobe's latest generative AI", url: "https://firefly.adobe.com", pricing: "freemium", features: ["Image generation", "Text effects", "Generative fill"] },
    { name: "FLUX.1", category: "image", description: "Advanced image generation model", url: "https://flux.ai", pricing: "freemium", features: ["Image generation", "High quality", "Fast"] },
    { name: "Ideogram", category: "image", description: "AI text-to-image with text rendering", url: "https://ideogram.ai", pricing: "free", features: ["Text-to-image", "Typography", "Styles"] },
    { name: "Leonardo.Ai", category: "image", description: "AI image generation platform", url: "https://leonardo.ai", pricing: "freemium", features: ["Image generation", "Model training", "Community"] },
    { name: "Playground AI", category: "image", description: "AI image creation and editing", url: "https://playgroundai.com", pricing: "freemium", features: ["Image generation", "Editing", "Filters"] },
    { name: "Bing Create", category: "image", description: "Microsoft's AI image creator", url: "https://bing.com/create", pricing: "free", features: ["Image generation", "DALL-E integration", "Styles"] },
    { name: "NightCafe", category: "image", description: "AI art generator", url: "https://nightcafe.studio", pricing: "freemium", features: ["Art generation", "Styles", "Community"] },
    { name: "getimg.ai", category: "image", description: "AI image generation suite", url: "https://getimg.ai", pricing: "freemium", features: ["Image generation", "Editing", "Models"] },
    { name: "DeepAI", category: "image", description: "AI image generation API", url: "https://deepai.org", pricing: "freemium", features: ["Image generation", "API access", "Various models"] },
    { name: "Gencraft", category: "image", description: "AI image generation", url: "https://gencraft.com", pricing: "freemium", features: ["Image generation", "Styles", "Real-time"] },
    { name: "Remini", category: "image", description: "AI photo enhancement", url: "https://remini.ai", pricing: "freemium", features: ["Photo enhancement", "Face restoration", "Upscaling"] },
    { name: "Fotor AI", category: "image", description: "AI photo editing", url: "https://fotor.com", pricing: "freemium", features: ["Photo editing", "Effects", "Enhancement"] },
    { name: "Hotpot", category: "image", description: "AI graphic design tools", url: "https://hotpot.ai", pricing: "freemium", features: ["Design tools", "Art generation", "Colorization"] },
    { name: "Pixelcut", category: "image", description: "AI image editing tools", url: "https://pixelcut.com", pricing: "free", features: ["Background removal", "Image enhancement", "Batch processing"] },
    { name: "Imglarger", category: "image", description: "AI image upscaling", url: "https://imglarger.com", pricing: "freemium", features: ["Image upscaling", "Enhancement", "Batch processing"] },
    { name: "Magic Eraser", category: "image", description: "AI object removal from images", url: "https://magiceraser.io", pricing: "free", features: ["Object removal", "People removal", "Watermark removal"] },
    { name: "Unfake.png", category: "image", description: "AI background removal", url: "https://unfake.png", pricing: "free", features: ["Background removal", "Transparency", "Batch processing"] },
    { name: "Imageditor.ai", category: "image", description: "AI image editing platform", url: "https://imageditor.ai", pricing: "freemium", features: ["Image editing", "Enhancement", "Filters"] },
    // Video Generators / Editors
    { name: "Synthesia", category: "video-editors", description: "AI video generation with avatars", url: "https://synthesia.io", pricing: "paid", features: ["AI avatars", "Multi-language", "Template library"] },
    { name: "HeyGen", category: "video-editors", description: "AI video generation with avatars", url: "https://heygen.com", pricing: "freemium", features: ["AI avatars", "Video translation", "Templates"] },
    { name: "InVideo AI", category: "video-editors", description: "AI video creation from text", url: "https://invideo.io", pricing: "freemium", features: ["Text-to-video", "Templates", "Media library"] },
    { name: "LTX Studio", category: "video-editors", description: "AI video production platform", url: "https://ltx.studio", pricing: "coming soon", features: ["Video production", "Storyboarding", "AI assistance"] },
    { name: "Pika Labs 1.0", category: "video-editors", description: "AI video generation platform", url: "https://pika.art", pricing: "free", features: ["Video generation", "Animation", "Styles"] },
    { name: "Runway Gen-3", category: "video-editors", description: "Latest Runway AI video model", url: "https://runwayml.com", pricing: "freemium", features: ["Video generation", "Editing", "Effects"] },
    { name: "Haiper AI", category: "video-editors", description: "AI video generation", url: "https://haiper.ai", pricing: "free", features: ["Video generation", "Animation", "Styles"] },
    { name: "Kling AI", category: "video-editors", description: "AI video generation", url: "https://klingai.com", pricing: "coming soon", features: ["Video generation", "Realistic", "High quality"] },
    { name: "Krea AI", category: "video-editors", description: "AI video generation", url: "https://krea.ai", pricing: "freemium", features: ["Video generation", "Real-time", "Styles"] },
    { name: "Captions", category: "video-editors", description: "AI video captioning", url: "https://captions.ai", pricing: "freemium", features: ["Auto-captions", "Translation", "Styles"] },
    { name: "Syllaby", category: "video-editors", description: "AI for social media videos", url: "https://syllaby.io", pricing: "freemium", features: ["Short videos", "Templates", "Viral potential"] },
    { name: "Veed.io", category: "video-editors", description: "AI video editing platform", url: "https://veed.io", pricing: "freemium", features: ["Video editing", "Subtitles", "Screen recording"] },
    { name: "CapCut AI", category: "video-editors", description: "AI video editing features", url: "https://capcut.com", pricing: "free", features: ["Video editing", "Effects", "Templates"] },
    { name: "OpusClip", category: "video-editors", description: "AI for creating video clips", url: "https://opus.pro", pricing: "freemium", features: ["Video repurposing", "Clip generation", "Auto-captioning"] },
    { name: "Klap", category: "video-editors", description: "AI video repurposing", url: "https://klap.app", pricing: "freemium", features: ["Video repurposing", "Short clips", "Social media"] },
    { name: "Eightify", category: "video-editors", description: "AI YouTube summaries", url: "https://eightify.app", pricing: "freemium", features: ["Video summaries", "Chapter detection", "Key insights"] },
    { name: "Morphstudio", category: "video-editors", description: "AI video creation", url: "https://morphstudio.com", pricing: "freemium", features: ["Video creation", "Templates", "Effects"] },
    { name: "Elai", category: "video-editors", description: "AI video generation", url: "https://elai.io", pricing: "freemium", features: ["Video generation", "Avatars", "Templates"] },
    { name: "Colossyan", category: "video-editors", description: "AI corporate video creation", url: "https://colossyan.com", pricing: "freemium", features: ["Corporate videos", "Avatars", "Localization"] },
    { name: "Flexclip", category: "video-editors", description: "AI video editing", url: "https://flexclip.com", pricing: "freemium", features: ["Video editing", "Templates", "Stock media"] },
    { name: "Luma AI", category: "video-editors", description: "AI 3D video creation", url: "https://lumalabs.ai", pricing: "freemium", features: ["3D video", "NeRF", "Scene reconstruction"] },
    { name: "Decoherence", category: "video-editors", description: "AI video creation", url: "https://decoherence.co", pricing: "freemium", features: ["Video creation", "Animation", "Styles"] },
    { name: "Freepik (video)", category: "video-editors", description: "AI video resources", url: "https://freepik.com", pricing: "freemium", features: ["Video templates", "Stock footage", "Effects"] },
    { name: "ImgCreator AI", category: "video-editors", description: "AI image and video creation", url: "https://imgcreator.ai", pricing: "freemium", features: ["Image/video creation", "Styles", "Templates"] },
    // Music & Sound
    { name: "AIVA", category: "music", description: "AI music composition assistant", url: "https://aiva.ai", pricing: "freemium", features: ["Music composition", "Styles", "Royalty-free"] },
    { name: "Soundraw", category: "music", description: "AI music generation", url: "https://soundraw.io", pricing: "freemium", features: ["Music generation", "Customization", "Moods"] },
    { name: "Beatoven AI", category: "music", description: "AI background music creation", url: "https://beatoven.ai", pricing: "freemium", features: ["Background music", "Mood selection", "Customization"] },
    { name: "Suno AI", category: "music", description: "AI music creation", url: "https://suno.ai", pricing: "free", features: ["Music generation", "Vocals", "Styles"] },
    { name: "Udio", category: "music", description: "AI music generation", url: "https://udio.com", pricing: "free", features: ["Music generation", "Collaboration", "Sharing"] },
    { name: "VoicMod", category: "music", description: "AI voice modulation", url: "https://voicmod.net", pricing: "freemium", features: ["Voice modulation", "Effects", "Soundboard"] },
    { name: "Krisp (noise removal)", category: "music", description: "AI noise cancellation", url: "https://krisp.ai", pricing: "freemium", features: ["Noise cancellation", "Echo removal", "Voice isolation"] },
    { name: "Auphonic", category: "music", description: "AI audio post-production", url: "https://auphonic.com", pricing: "freemium", features: ["Audio leveling", "Loudness normalization", "Noise reduction"] },
    { name: "Adobe Podcast Enhance", category: "music", description: "AI audio enhancement", url: "https://podcast.adobe.com/enhance", pricing: "free", features: ["Audio enhancement", "Speech enhancement", "Noise reduction"] },
    { name: "Podcastle", category: "music", description: "AI podcast creation", url: "https://podcastle.ai", pricing: "freemium", features: ["Podcast creation", "AI voices", "Editing"] },
    // Spreadsheets & Data
    { name: "FormulaBot", category: "spreadsheet", description: "AI for spreadsheet formulas", url: "https://formulabot.com", pricing: "freemium", features: ["Formula generation", "Explanation", "Support"] },
    { name: "Rows AI", category: "spreadsheet", description: "AI-powered spreadsheets", url: "https://rows.com", pricing: "freemium", features: ["AI functions", "Data analysis", "Integration"] },
    { name: "Sheet AI", category: "spreadsheet", description: "AI for Google Sheets", url: "https://sheetai.app", pricing: "freemium", features: ["AI functions", "Data analysis", "Automation"] },
    { name: "Gigasheet", category: "spreadsheet", description: "Big data spreadsheet", url: "https://gigasheet.com", pricing: "freemium", features: ["Big data", "Analysis", "Collaboration"] },
    { name: "Excelmatic", category: "spreadsheet", description: "AI for Excel", url: "https://excelmatic.ai", pricing: "freemium", features: ["Excel automation", "Formula generation", "Analysis"] },
    { name: "Julius AI", category: "spreadsheet", description: "AI data analysis", url: "https://julius.ai", pricing: "freemium", features: ["Data analysis", "Visualization", "Insights"] },
    { name: "Zing Data", category: "spreadsheet", description: "AI data analysis", url: "https://zingdata.com", pricing: "freemium", features: ["Data analysis", "Visualization", "Collaboration"] },
    { name: "Polymer", category: "spreadsheet", description: "AI data visualization", url: "https://polymer.io", pricing: "freemium", features: ["Data visualization", "Analysis", "Sharing"] },
    { name: "Akkio", category: "spreadsheet", description: "AI for business intelligence", url: "https://akkio.com", pricing: "freemium", features: ["Business intelligence", "Prediction", "No-code"] },
    { name: "Pandas AI", category: "spreadsheet", description: "AI for pandas data analysis", url: "https://pandas-ai.com", pricing: "free", features: ["Data analysis", "Pandas integration", "Code generation"] },
    // Data-visualisation & Knowledge
    { name: "Flourish", category: "data", description: "AI data visualization", url: "https://flourish.studio", pricing: "freemium", features: ["Data visualization", "Templates", "Interactivity"] },
    { name: "Visme", category: "data", description: "AI visual content creation", url: "https://visme.co", pricing: "freemium", features: ["Data visualization", "Infographics", "Presentations"] },
    { name: "Deckplot", category: "data", description: "AI data presentation", url: "https://deckplot.com", pricing: "freemium", features: ["Data presentation", "Visualization", "Insights"] },
    { name: "Plotly (implied)", category: "data", description: "Data visualization with AI", url: "https://plotly.com", pricing: "freemium", features: ["Data visualization", "Analytics", "Dashboards"] },
    { name: "Map This", category: "data", description: "AI mind mapping from documents", url: "https://mapthis.ai", pricing: "freemium", features: ["Mind mapping", "Document analysis", "Visualization"] },
    { name: "Tettra", category: "data", description: "AI knowledge management", url: "https://tettra.com", pricing: "freemium", features: ["Knowledge base", "AI assistance", "Integration"] },
    { name: "Mem", category: "data", description: "AI knowledge base", url: "https://mem.ai", pricing: "freemium", features: ["Knowledge management", "AI assistance", "Connections"] },
    { name: "Notion", category: "data", description: "AI-powered workspace", url: "https://notion.so", pricing: "freemium", features: ["Knowledge management", "AI assistance", "Databases"] },
    // Scheduling & Time
    { name: "Calendly", category: "scheduling", description: "AI meeting scheduling", url: "https://calendly.com", pricing: "freemium", features: ["Meeting scheduling", "Integration", "Analytics"] },
    { name: "Koalendar", category: "scheduling", description: "Smart scheduling tool", url: "https://koalendar.com", pricing: "freemium", features: ["Scheduling", "Availability", "Integration"] },
    { name: "Motion", category: "scheduling", description: "AI calendar and scheduling", url: "https://motion.app", pricing: "freemium", features: ["Calendar optimization", "Scheduling", "Task management"] },
    { name: "Clockwise", category: "scheduling", description: "AI calendar optimization", url: "https://clockwise.com", pricing: "freemium", features: ["Calendar optimization", "Focus time", "Team coordination"] },
    { name: "Reclaim AI", category: "scheduling", description: "AI scheduling assistant", url: "https://reclaim.ai", pricing: "freemium", features: ["Scheduling", "Habit tracking", "Integration"] },
    { name: "Trevor AI", category: "scheduling", description: "AI productivity assistant", url: "https://trevor.ai", pricing: "freemium", features: ["Task scheduling", "Productivity", "Time blocking"] },
    { name: "Taskade", category: "scheduling", description: "AI task and project management", url: "https://taskade.com", pricing: "freemium", features: ["Task management", "Collaboration", "AI assistance"] },
    // No-Code / Prototyping
    { name: "Replit", category: "nocode", description: "AI coding platform", url: "https://replit.com", pricing: "freemium", features: ["Coding platform", "AI assistance", "Collaboration"] },
    { name: "Lovable", category: "nocode", description: "AI web app builder", url: "https://lovable.dev", pricing: "freemium", features: ["Web app builder", "AI assistance", "Deployment"] },
    { name: "v0", category: "nocode", description: "AI UI generation", url: "https://v0.dev", pricing: "freemium", features: ["UI generation", "Code export", "Iteration"] },
    { name: "Databutton", category: "nocode", description: "AI app builder", url: "https://databutton.com", pricing: "freemium", features: ["App builder", "AI assistance", "Data integration"] },
    { name: "Bolt", category: "nocode", description: "AI web development", url: "https://bolt.new", pricing: "freemium", features: ["Web development", "AI assistance", "Deployment"] },
    { name: "Windsurf", category: "nocode", description: "AI development environment", url: "https://windsurf.ai", pricing: "freemium", features: ["Development environment", "AI assistance", "Code completion"] },
    { name: "Cursor", category: "nocode", description: "AI-powered code editor", url: "https://cursor.sh", pricing: "freemium", features: ["Code editor", "AI assistance", "Chat"] },
    { name: "FlutterFlow", category: "nocode", description: "AI app development", url: "https://flutterflow.io", pricing: "freemium", features: ["App development", "Flutter", "No-code"] },
    { name: "Bubble", category: "nocode", description: "No-code web app builder", url: "https://bubble.io", pricing: "freemium", features: ["No-code apps", "Workflow", "Plugins"] },
    { name: "Softr AI", category: "nocode", description: "No-code with AI features", url: "https://softr.io", pricing: "freemium", features: ["No-code apps", "Airtable integration", "AI features"] },
    // Large Language / Multimodal Models
    { name: "ChatGPT / GPT-4", category: "llm", description: "OpenAI's language models", url: "https://chat.openai.com", pricing: "freemium", features: ["Conversation", "Content generation", "Code assistance"] },
    { name: "Claude 3.5", category: "llm", description: "Anthropic's latest AI model", url: "https://claude.ai", pricing: "freemium", features: ["Long context", "Analysis", "Content creation"] },
    { name: "Gemini 1.5", category: "llm", description: "Google's advanced AI model", url: "https://gemini.google.com", pricing: "free", features: ["Multimodal", "Long context", "Reasoning"] },
    { name: "DeepSeek", category: "llm", description: "Advanced language model", url: "https://deepseek.com", pricing: "free", features: ["Reasoning", "Code assistance", "Multilingual"] },
    { name: "Groq (ultra-fast LLM)", category: "llm", description: "Ultra-fast AI inference", url: "https://groq.com", pricing: "free", features: ["Speed", "API access", "Multiple models"] },
    { name: "Llama", category: "llm", description: "Meta's open-source model", url: "https://ai.meta.com/llama", pricing: "free", features: ["Open source", "Customization", "Local deployment"] },
    { name: "Mistral 7B", category: "llm", description: "Efficient language model", url: "https://mistral.ai", pricing: "free", features: ["Efficiency", "Open source", "Multilingual"] },
    // Chrome Extensions / Twitter / LinkedIn
    { name: "Postwise", category: "extensions", description: "AI for social media posting", url: "https://postwise.io", pricing: "freemium", features: ["Social media posting", "Scheduling", "Analytics"] },
    { name: "TweetHunter", category: "extensions", description: "AI Twitter growth tool", url: "https://tweethunter.io", pricing: "freemium", features: ["Twitter growth", "Content scheduling", "Analytics"] },
    { name: "Typefully", category: "extensions", description: "AI Twitter writing", url: "https://typefully.com", pricing: "freemium", features: ["Twitter writing", "Scheduling", "Analytics"] },
    { name: "Taplio", category: "extensions", description: "AI for LinkedIn content", url: "https://taplio.com", pricing: "freemium", features: ["LinkedIn content", "Scheduling", "Analytics"] },
    { name: "Tribescaler", category: "extensions", description: "AI for Twitter growth", url: "https://tribescaler.com", pricing: "freemium", features: ["Twitter growth", "Content scaling", "Analytics"] },
    { name: "Merlin", category: "extensions", description: "AI assistant extension", url: "https://merlin.foyer.work", pricing: "free", features: ["AI assistance", "Web integration", "Multiple models"] },
    { name: "Tinywow", category: "extensions", description: "AI file utilities", url: "https://tinywow.com", pricing: "free", features: ["File conversion", "Image tools", "PDF tools"] },
    { name: "Grammarly", category: "extensions", description: "AI writing assistant", url: "https://grammarly.com", pricing: "freemium", features: ["Grammar check", "Tone detection", "Clarity"] },
    { name: "Wordtune", category: "extensions", description: "AI writing improvement", url: "https://wordtune.com", pricing: "freemium", features: ["Rewriting", "Tone adjustment", "Clarity"] },
    { name: "HyperWrite", category: "extensions", description: "AI writing assistant", url: "https://hyperwriteai.com", pricing: "freemium", features: ["Content generation", "Auto-complete", "Flexibility"] },
    // AI Detectors & Bypass
    { name: "Copyleaks", category: "detectors", description: "AI content detection", url: "https://copyleaks.com", pricing: "freemium", features: ["AI detection", "Plagiarism check", "Integration"] },
    { name: "BypassGPT", category: "detectors", description: "Bypass AI detection", url: "https://bypassgpt.ai", pricing: "freemium", features: ["AI bypass", "Humanization", "Undetection"] },
    { name: "GPTInf", category: "detectors", description: "AI text humanizer", url: "https://gptinf.com", pricing: "free", features: ["Text humanization", "Bypass detection", "Paraphrasing"] },
    // Plagiarism & Proofing
    { name: "PlagiarismRemover.net", category: "plagiarism", description: "Remove plagiarism from text", url: "https://plagiarismremover.net", pricing: "freemium", features: ["Plagiarism removal", "Paraphrasing", "Humanization"] },
    { name: "Scite", category: "plagiarism", description: "AI-powered citation analysis", url: "https://scite.ai", pricing: "freemium", features: ["Citation analysis", "Research assessment", "Context"] },
    { name: "Scholarcy", category: "plagiarism", description: "Research paper summarization", url: "https://scholarcy.com", pricing: "freemium", features: ["Summarization", "Flashcards", "Reference extraction"] },
    // Courses & Learning Platforms
    { name: "MindLuster.com", category: "courses", description: "AI-powered learning platform", url: "https://mindluster.com", pricing: "free", features: ["Online courses", "AI assistance", "Certificates"] },
    { name: "LearningStudio.ai", category: "courses", description: "AI course creation platform", url: "https://learningstudio.ai", pricing: "freemium", features: ["Course creation", "AI assistance", "Analytics"] },
    // Icons & Mock-ups
    { name: "IconGeneratorAI", category: "icons", description: "AI icon generation", url: "https://icongeneratorai.com", pricing: "freemium", features: ["Icon generation", "Styles", "Customization"] },
    { name: "Autodraw", category: "icons", description: "AI drawing tool", url: "https://autodraw.com", pricing: "free", features: ["Drawing assistance", "Shape recognition", "Sketching"] },
    { name: "Stockimg AI", category: "icons", description: "AI stock image generation", url: "https://stockimg.ai", pricing: "freemium", features: ["Stock images", "AI generation", "Styles"] },
    { name: "MockupTiger (implied)", category: "icons", description: "AI mockup generation", url: "https://mockuptiger.com", pricing: "freemium", features: ["Mockup generation", "Templates", "Customization"] },
    // Research & Citations
    { name: "Consensus", category: "citations", description: "AI for research synthesis", url: "https://consensus.app", pricing: "free", features: ["Research synthesis", "Evidence-based", "Citations"] },
    { name: "Litmaps", category: "citations", description: "AI literature mapping", url: "https://litmaps.com", pricing: "freemium", features: ["Literature mapping", "Discovery", "Visualization"] },
    { name: "Scite", category: "citations", description: "AI-powered citation analysis", url: "https://scite.ai", pricing: "freemium", features: ["Citation analysis", "Research assessment", "Context"] },
    { name: "Elicit", category: "citations", description: "AI research assistant", url: "https://elicit.org", pricing: "freemium", features: ["Paper discovery", "Summarization", "Concept extraction"] },
    { name: "Perplexity", category: "citations", description: "AI answer engine", url: "https://perplexity.ai", pricing: "free", features: ["Real-time answers", "Source citations", "Follow-up"] },
    { name: "Komo AI", category: "citations", description: "AI search engine", url: "https://komo.ai", pricing: "free", features: ["AI search", "Real-time results", "Sources"] },
    // Sales & Outreach
    { name: "Replygrow", category: "sales", description: "AI for sales engagement", url: "https://replygrow.com", pricing: "freemium", features: ["Sales engagement", "Automation", "Analytics"] },
    { name: "Hunter.io", category: "sales", description: "Email finder with AI", url: "https://hunter.io", pricing: "freemium", features: ["Email finder", "Verification", "Domain search"] },
    { name: "PainFinder.co", category: "sales", description: "AI for customer pain points", url: "https://painfinder.co", pricing: "freemium", features: ["Pain point analysis", "Customer insights", "Market research"] },
    { name: "SalesRobot (implied)", category: "sales", description: "AI sales assistant", url: "https://salesrobot.ai", pricing: "freemium", features: ["Sales assistance", "Lead generation", "Email automation"] },
    { name: "Lemlist (implied)", category: "sales", description: "AI cold email outreach", url: "https://lemlist.com", pricing: "freemium", features: ["Cold email", "Personalization", "Automation"] },
    // Startup & Ideation
    { name: "Ideas AI", category: "startup", description: "AI startup idea generation", url: "https://ideasai.com", pricing: "free", features: ["Idea generation", "Validation", "Market analysis"] },
    { name: "Nameflix", category: "startup", description: "AI business name generator", url: "https://nameflix.com", pricing: "free", features: ["Name generation", "Domain check", "Availability"] },
    { name: "Pitchgrade", category: "startup", description: "AI pitch deck creation", url: "https://pitchgrade.com", pricing: "freemium", features: ["Pitch creation", "Investor targeting", "Templates"] },
    { name: "Validator AI", category: "startup", description: "AI startup idea validation", url: "https://validatorai.com", pricing: "free", features: ["Idea validation", "Feedback", "Market analysis"] },
    { name: "Namelix (implied)", category: "startup", description: "AI business name generator", url: "https://namelix.com", pricing: "free", features: ["Name generation", "Brand identity", "Domain check"] },
    { name: "Tugan.ai", category: "startup", description: "AI for marketing content", url: "https://tugan.ai", pricing: "freemium", features: ["Marketing content", "Automation", "Analytics"] },
    { name: "Durable.co", category: "startup", description: "AI website builder", url: "https://durable.co", pricing: "freemium", features: ["Website builder", "AI copywriting", "Analytics"] },
    { name: "Mixo.io", category: "startup", description: "AI startup website builder", url: "https://mixo.io", pricing: "freemium", features: ["Website builder", "AI content", "Analytics"] },
    // Miscellaneous Utilities
    { name: "DoNotPay (AI lawyer)", category: "utilities", description: "AI legal assistant", url: "https://donotpay.com", pricing: "freemium", features: ["Legal assistance", "Consumer rights", "Automation"] },
    { name: "Timely (time-tracker)", category: "utilities", description: "AI time tracking", url: "https://timelyapp.com", pricing: "freemium", features: ["Time tracking", "AI timesheets", "Reporting"] },
    { name: "Playform.ai (art)", category: "utilities", description: "AI art generation", url: "https://playform.io", pricing: "freemium", features: ["Art generation", "Styles", "Exhibitions"] },
    { name: "AIValley.ai (tool directory)", category: "utilities", description: "AI tools directory", url: "https://aivalley.ai", pricing: "free", features: ["Tool directory", "Reviews", "Categories"] },
    { name: "Insidr.ai (tool directory)", category: "utilities", description: "AI tools directory", url: "https://insidr.ai", pricing: "free", features: ["Tool directory", "Reviews", "Comparison"] },
    { name: "Tinywow (file utilities)", category: "utilities", description: "AI file tools", url: "https://tinywow.com", pricing: "free", features: ["File conversion", "Image tools", "PDF tools"] },
    { name: "Imageditor.ai", category: "utilities", description: "AI image editing", url: "https://imageditor.ai", pricing: "freemium", features: ["Image editing", "Enhancement", "Filters"] },
    { name: "Fontjoy", category: "utilities", description: "AI font pairing", url: "https://fontjoy.com", pricing: "free", features: ["Font pairing", "Font discovery", "Export"] },
    { name: "Huemint", category: "utilities", description: "AI color palette generator", url: "https://huemint.com", pricing: "free", features: ["Color palette", "Contrast", "Accessibility"] },
    { name: "Khroma", category: "utilities", description: "AI color palette generator", url: "https://khroma.co", pricing: "free", features: ["Color palette", "Training", "Export"] },
    { name: "Brandmark", category: "utilities", description: "AI logo maker", url: "https://brandmark.io", pricing: "freemium", features: ["Logo generation", "Brand identity", "Color palette"] },
    { name: "MS Designer", category: "utilities", description: "Microsoft's AI design tool", url: "https://designer.microsoft.com", pricing: "free", features: ["Design templates", "AI suggestions", "Image generation"] },
    { name: "Clipdrop", category: "utilities", description: "AI image tools", url: "https://clipdrop.co", pricing: "freemium", features: ["Background removal", "Image cleanup", "Relighting"] },
    { name: "Designify", category: "utilities", description: "AI image enhancement", url: "https://designify.ai", pricing: "freemium", features: ["Image enhancement", "Background removal", "Upscaling"] },
    { name: "Autodraw", category: "utilities", description: "AI drawing tool", url: "https://autodraw.com", pricing: "free", features: ["Drawing assistance", "Shape recognition", "Sketching"] },
    { name: "Magician for Figma", category: "utilities", description: "AI design tools for Figma", url: "https://magician.design", pricing: "free", features: ["Design assistance", "Icon generation", "Content creation"] }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const toolsContainer = document.getElementById('toolsContainer');
const resultsCount = document.getElementById('resultsCount');
const sortSelect = document.getElementById('sortSelect');
const sidebarTabs = document.getElementById('sidebarTabs');
const filterAllCheckbox = document.getElementById('filter-all');
const clearFiltersBtn = document.getElementById('clearFilters');
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');
const addToolBtn = document.getElementById('addToolBtn');
const compareBtn = document.getElementById('compareBtn');
const addToolModal = document.getElementById('addToolModal');
const compareModal = document.getElementById('compareModal');
const addToolForm = document.getElementById('addToolForm');
const closeModal = document.querySelectorAll('.close');
const successMessage = document.getElementById('successMessage');
const successText = document.getElementById('successText');
const loading = document.getElementById('loading');
const scrollToTop = document.getElementById('scrollToTop');
const newsletterForm = document.getElementById('newsletterForm');
const doCompare = document.getElementById('doCompare');
const compareContent = document.getElementById('compareContent');
const compareResults = document.getElementById('compareResults');
const comparisonTable = document.getElementById('comparisonTable');
const compareToolsList = document.getElementById('compareToolsList');
const bookmarkedCount = document.getElementById('bookmarkedCount');

// Pagination elements
const paginationContainer = document.getElementById('paginationContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const paginationInfo = document.getElementById('paginationInfo');

// Stats elements
const totalToolsEl = document.getElementById('totalTools');
const totalCategoriesEl = document.getElementById('totalCategories');
const allToolsCountEl = document.getElementById('allToolsCount');

// State
let filteredTools = [...aiTools];
let activeFilters = {
    categories: [],
    pricing: [],
    bookmarked: false
};
let activeCategory = 'all';
let viewMode = 'grid'; // grid or list
let bookmarkedTools = JSON.parse(localStorage.getItem('bookmarkedTools')) || [];
let compareList = [];

// Pagination state
let currentPage = 1;
const itemsPerPage = 15;

// Category icons and colors
const categoryData = {
    email: { icon: 'fas fa-envelope', color: '#4361ee' },
    misc: { icon: 'fas fa-magic', color: '#f72585' },
    research: { icon: 'fas fa-microscope', color: '#4cc9f0' },
    video: { icon: 'fas fa-video', color: '#7209b7' },
    career: { icon: 'fas fa-briefcase', color: '#560bad' },
    coding: { icon: 'fas fa-code', color: '#3a0ca3' },
    writing: { icon: 'fas fa-pen', color: '#4361ee' },
    design: { icon: 'fas fa-palette', color: '#f72585' },
    reels: { icon: 'fas fa-film', color: '#4cc9f0' },
    viral: { icon: 'fas fa-virus', color: '#7209b7' },
    marketing: { icon: 'fas fa-bullhorn', color: '#560bad' },
    social: { icon: 'fas fa-share-alt', color: '#3a0ca3' },
    logo: { icon: 'fas fa-trademark', color: '#4361ee' },
    ui: { icon: 'fas fa-desktop', color: '#f72585' },
    general: { icon: 'fas fa-paint-brush', color: '#4cc9f0' },
    audio: { icon: 'fas fa-music', color: '#7209b7' },
    chatbots: { icon: 'fas fa-comments', color: '#560bad' },
    automation: { icon: 'fas fa-robot', color: '#3a0ca3' },
    prompt: { icon: 'fas fa-keyboard', color: '#4361ee' },
    presentation: { icon: 'fas fa-presentation', color: '#f72585' },
    meeting: { icon: 'fas fa-users', color: '#4cc9f0' },
    website: { icon: 'fas fa-globe', color: '#7209b7' },
    seo: { icon: 'fas fa-search', color: '#560bad' },
    image: { icon: 'fas fa-image', color: '#3a0ca3' },
    'video-editors': { icon: 'fas fa-cut', color: '#4361ee' },
    music: { icon: 'fas fa-headphones', color: '#f72585' },
    spreadsheet: { icon: 'fas fa-table', color: '#4cc9f0' },
    data: { icon: 'fas fa-chart-bar', color: '#7209b7' },
    scheduling: { icon: 'fas fa-calendar', color: '#560bad' },
    nocode: { icon: 'fas fa-cube', color: '#3a0ca3' },
    llm: { icon: 'fas fa-brain', color: '#4361ee' },
    extensions: { icon: 'fas fa-puzzle-piece', color: '#f72585' },
    detectors: { icon: 'fas fa-shield-alt', color: '#4cc9f0' },
    plagiarism: { icon: 'fas fa-copy', color: '#7209b7' },
    courses: { icon: 'fas fa-graduation-cap', color: '#560bad' },
    icons: { icon: 'fas fa-icons', color: '#3a0ca3' },
    citations: { icon: 'fas fa-quote-right', color: '#4361ee' },
    sales: { icon: 'fas fa-handshake', color: '#f72585' },
    startup: { icon: 'fas fa-rocket', color: '#4cc9f0' },
    utilities: { icon: 'fas fa-tools', color: '#7209b7' }
};

// Initialize the page
function init() {
    updateStats();
    renderSidebarTabs();
    renderTools();
    updateBookmarkedCount();
    setupEventListeners();
}

// Update stats
function updateStats() {
    const categories = [...new Set(aiTools.map(tool => tool.category))];
    totalToolsEl.textContent = aiTools.length;
    totalCategoriesEl.textContent = categories.length;
    allToolsCountEl.textContent = aiTools.length;
}

// Update bookmarked count
function updateBookmarkedCount() {
    bookmarkedCount.textContent = bookmarkedTools.length;
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    sortSelect.addEventListener('change', handleSort);
    clearFiltersBtn.addEventListener('click', clearAllFilters);

    // View mode buttons
    gridViewBtn.addEventListener('click', () => setViewMode('grid'));
    listViewBtn.addEventListener('click', () => setViewMode('list'));

    // Add tool modal
    addToolBtn.addEventListener('click', () => {
        addToolModal.style.display = 'block';
    });

    // Compare modal
    compareBtn.addEventListener('click', () => {
        updateCompareToolsList();
        compareModal.style.display = 'block';
    });

    // Close modals
    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Add tool form
    addToolForm.addEventListener('submit', handleAddTool);

    // Newsletter form
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // Compare tools
    doCompare.addEventListener('click', handleCompare);

    // Scroll to top
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTop.style.display = 'flex';
        } else {
            scrollToTop.style.display = 'none';
        }
    });

    // Filter all checkbox
    filterAllCheckbox.addEventListener('change', handleFilterAll);

    // Pricing filters
    document.querySelectorAll('input[value="free"], input[value="freemium"], input[value="paid"]').forEach(checkbox => {
        checkbox.addEventListener('change', handlePricingFilter);
    });

    // Bookmarked filter
    document.getElementById('filter-bookmarked').addEventListener('change', handleBookmarkedFilter);

    // Pagination buttons
    prevBtn.addEventListener('click', goToPreviousPage);
    nextBtn.addEventListener('click', goToNextPage);
}

// Handle add tool
function handleAddTool(e) {
    e.preventDefault();
    const name = document.getElementById('toolName').value;
    const category = document.getElementById('toolCategory').value;
    const pricing = document.getElementById('toolPricing').value;
    const description = document.getElementById('toolDescription').value;
    const url = document.getElementById('toolUrl').value;
    const features = document.getElementById('toolFeatures').value.split(',').map(f => f.trim());

    // Add new tool to the array
    const newTool = {
        name,
        category,
        pricing,
        description,
        url,
        features
    };

    aiTools.push(newTool);

    // Update UI
    updateStats();
    renderSidebarTabs();
    applyFilters();

    // Show success message
    showSuccessMessage('Tool added successfully!');

    // Reset form and close modal
    addToolForm.reset();
    addToolModal.style.display = 'none';
}

// Handle newsletter submit
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    // In a real application, you would send this to your backend
    console.log(`Newsletter subscription for: ${email}`);

    // Show success message
    showSuccessMessage('Successfully subscribed to newsletter!');

    // Reset form
    e.target.reset();
}

// Update compare tools list
function updateCompareToolsList() {
    let html = '';

    // Add all tools to the compare list
    aiTools.forEach(tool => {
        const categoryInfo = categoryData[tool.category] || { icon: 'fas fa-robot', color: '#4361ee' };
        const displayName = tool.category.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase());
        html += `
                    <div class="filter-option">
                        <input type="checkbox" id="compare-${tool.name.replace(/\s+/g, '-')}" value="${tool.name}">
                        <label for="compare-${tool.name.replace(/\s+/g, '-')}">${tool.name}</label>
                        <span class="tool-category">${displayName}</span>
                    </div>
                `;
    });

    compareToolsList.innerHTML = html;

    // Add event listeners to checkboxes
    compareToolsList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateCompareList);
    });
}

// Update compare list
function updateCompareList() {
    compareList = [];
    compareToolsList.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const toolName = checkbox.value;
        const tool = aiTools.find(t => t.name === toolName);
        if (tool) {
            compareList.push(tool);
        }
    });
}

// Handle compare
function handleCompare() {
    if (compareList.length < 2) {
        showSuccessMessage('Please select at least 2 tools to compare');
        return;
    }

    // Show comparison results
    compareContent.style.display = 'none';
    compareResults.style.display = 'block';

    // Create comparison table
    let html = `
                <thead>
                    <tr>
                        <th>Feature</th>
            `;

    compareList.forEach(tool => {
        html += `<th>${tool.name}</th>`;
    });

    html += `
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Category</td>
            `;

    compareList.forEach(tool => {
        const displayName = tool.category.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase());
        html += `<td>${displayName}</td>`;
    });

    html += `
                    </tr>
                    <tr>
                        <td>Pricing</td>
            `;

    compareList.forEach(tool => {
        html += `<td>${tool.pricing}</td>`;
    });

    html += `
                    </tr>
                    <tr>
                        <td>Description</td>
            `;

    compareList.forEach(tool => {
        html += `<td>${tool.description}</td>`;
    });

    html += `
                    </tr>
                    <tr>
                        <td>Key Features</td>
            `;

    compareList.forEach(tool => {
        html += `<td>${tool.features ? tool.features.join(', ') : 'N/A'}</td>`;
    });

    html += `
                    </tr>
                    <tr>
                        <td>Website</td>
            `;

    compareList.forEach(tool => {
        html += `<td><a href="${tool.url}" target="_blank">Visit</a></td>`;
    });

    html += `
                    </tr>
                </tbody>
            `;

    comparisonTable.innerHTML = html;
}

// Show success message
function showSuccessMessage(message) {
    successText.textContent = message;
    successMessage.style.display = 'flex';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

// Render sidebar tabs
function renderSidebarTabs() {
    const categories = {};
    aiTools.forEach(tool => {
        if (!categories[tool.category]) {
            categories[tool.category] = 0;
        }
        categories[tool.category]++;
    });

    let html = `
                <div class="sidebar-tab active" data-category="all">
                    <i class="fas fa-th-large"></i>
                    <span>All</span>
                </div>
            `;

    Object.keys(categories).forEach(category => {
        const count = categories[category];
        const displayName = category.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase());
        const icon = categoryData[category]?.icon || 'fas fa-robot';
        html += `
                    <div class="sidebar-tab" data-category="${category}">
                        <i class="${icon}"></i>
                        <span>${displayName}</span>
                    </div>
                `;
    });

    sidebarTabs.innerHTML = html;

    // Add click event listeners to tabs
    document.querySelectorAll('.sidebar-tab').forEach(tab => {
        tab.addEventListener('click', handleSidebarTabClick);
    });
}

// Handle sidebar tab click
function handleSidebarTabClick(e) {
    const tab = e.currentTarget;
    const category = tab.dataset.category;

    // Update active tab
    document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Update active category
    activeCategory = category;

    // Uncheck "All Tools" if a category tab is selected
    filterAllCheckbox.checked = false;

    // Reset to first page when changing category
    currentPage = 1;

    // Apply filters
    applyFilters();
}

// Set view mode
function setViewMode(mode) {
    viewMode = mode;

    // Update active button
    if (mode === 'grid') {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        toolsContainer.className = 'tools-grid';
    } else {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        toolsContainer.className = 'tools-list';
    }

    // Re-render tools with new view mode
    renderTools();
}

// Toggle bookmark
function toggleBookmark(toolName) {
    const index = bookmarkedTools.indexOf(toolName);
    if (index === -1) {
        // Add to bookmarks
        bookmarkedTools.push(toolName);
        showSuccessMessage('Added to bookmarks!');
    } else {
        // Remove from bookmarks
        bookmarkedTools.splice(index, 1);
        showSuccessMessage('Removed from bookmarks!');
    }

    // Save to localStorage
    localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarkedTools));

    // Update UI
    updateBookmarkedCount();

    // If bookmarked filter is active, reapply filters
    if (activeFilters.bookmarked) {
        applyFilters();
    }
}

// Render tools with pagination
function renderTools() {
    // Calculate pagination
    const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTools = filteredTools.slice(startIndex, endIndex);

    if (filteredTools.length === 0) {
        toolsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No tools found</h3>
                        <p>Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                `;
        resultsCount.textContent = 'No tools found';
        paginationContainer.style.display = 'none';
        return;
    }

    let html = '';
    currentTools.forEach((tool, index) => {
        const categoryInfo = categoryData[tool.category] || { icon: 'fas fa-robot', color: '#4361ee' };
        const displayName = tool.category.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase());
        const isBookmarked = bookmarkedTools.includes(tool.name);

        html += `
                    <div class="tool-card" style="animation-delay: ${index * 0.05}s">
                        <div class="tool-header">
                            <div class="tool-top">
                                <div class="tool-logo" style="background-color: ${categoryInfo.color}">
                                    <i class="${categoryInfo.icon}"></i>
                                </div>
                                <span class="tool-category">${displayName}</span>
                            </div>
                            <h3 class="tool-name">${tool.name}</h3>
                            <p class="tool-description">${tool.description}</p>
                            ${tool.features ? `
                                <div class="tool-features">
                                    ${tool.features.slice(0, 3).map(feature => `<span class="tool-feature">${feature}</span>`).join('')}
                                    ${tool.features.length > 3 ? `<span class="tool-feature">+${tool.features.length - 3} more</span>` : ''}
                                </div>
                            ` : ''}
                        </div>
                        <div class="tool-footer">
                            <div class="tool-actions">
                                <button class="tool-action-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${tool.name}')" title="${isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}">
                                    <i class="fas fa-bookmark"></i>
                                </button>
                                <button class="tool-action-btn shared" onclick="shareTool('${tool.name}')" title="Share tool">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                            </div>
                            <a href="${tool.url}" target="_blank" class="tool-link">
                                Visit Tool <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                `;
    });

    toolsContainer.innerHTML = html;

    // Update results count
    const startItem = filteredTools.length > 0 ? startIndex + 1 : 0;
    const endItem = Math.min(endIndex, filteredTools.length);
    resultsCount.textContent = `Showing ${startItem}-${endItem} of ${filteredTools.length} tools`;

    // Update pagination controls
    updatePaginationControls(totalPages);
}

// Update pagination controls
function updatePaginationControls(totalPages) {
    // Show/hide pagination container
    paginationContainer.style.display = totalPages > 1 ? 'flex' : 'none';

    // Update pagination info
    paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Go to previous page
function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTools();
        // Scroll to top of tools container
        toolsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Go to next page
function goToNextPage() {
    const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTools();
        // Scroll to top of tools container
        toolsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Share tool
function shareTool(toolName) {
    const tool = aiTools.find(t => t.name === toolName);
    if (tool) {
        if (navigator.share) {
            navigator.share({
                title: tool.name,
                text: tool.description,
                url: tool.url
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const url = tool.url;
            navigator.clipboard.writeText(url).then(() => {
                showSuccessMessage('Link copied to clipboard!');
            });
        }
    }
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Show loading
    loading.style.display = 'block';
    toolsContainer.style.display = 'none';

    // Reset to first page when searching
    currentPage = 1;

    // Simulate loading delay for better UX
    setTimeout(() => {
        if (searchTerm === '') {
            filteredTools = [...aiTools];
        } else {
            filteredTools = aiTools.filter(tool => {
                return (
                    tool.name.toLowerCase().includes(searchTerm) ||
                    tool.description.toLowerCase().includes(searchTerm) ||
                    tool.category.toLowerCase().includes(searchTerm) ||
                    (tool.features && tool.features.some(feature =>
                        feature.toLowerCase().includes(searchTerm)
                    ))
                );
            });
        }

        applyFilters();
        loading.style.display = 'none';
        toolsContainer.style.display = viewMode === 'grid' ? 'grid' : 'flex';
    }, 300);
}

// Handle sort
function handleSort() {
    const sortValue = sortSelect.value;

    switch (sortValue) {
        case 'name':
            filteredTools.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredTools.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'category':
            filteredTools.sort((a, b) => a.category.localeCompare(b.category));
            break;
        case 'newest':
            // In a real app, you would sort by date added
            filteredTools.sort((a, b) => Math.random() - 0.5);
            break;
        case 'popular':
            // In a real app, you would sort by popularity/views
            filteredTools.sort((a, b) => Math.random() - 0.5);
            break;
    }

    // Reset to first page when sorting
    currentPage = 1;
    renderTools();
}

// Handle filter all
function handleFilterAll() {
    if (filterAllCheckbox.checked) {
        // Uncheck all other filters
        document.querySelectorAll('input[value="free"], input[value="freemium"], input[value="paid"], input[value="bookmarked"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Reset active filters
        activeFilters = {
            pricing: [],
            bookmarked: false
        };

        // Reset active category tab
        document.querySelectorAll('.sidebar-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.category === 'all') {
                tab.classList.add('active');
            }
        });

        activeCategory = 'all';

        // Reset to first page
        currentPage = 1;

        // Reset filtered tools
        filteredTools = [...aiTools];
        renderTools();
    }
}

// Handle pricing filter
function handlePricingFilter() {
    // Uncheck "All Tools" if any pricing is selected
    filterAllCheckbox.checked = false;

    // Get selected pricing options
    activeFilters.pricing = Array.from(document.querySelectorAll('input[value="free"]:checked, input[value="freemium"]:checked, input[value="paid"]:checked'))
        .map(checkbox => checkbox.value);

    // Reset to first page when filtering
    currentPage = 1;

    applyFilters();
}

// Handle bookmarked filter
function handleBookmarkedFilter() {
    // Uncheck "All Tools" if bookmarked filter is selected
    filterAllCheckbox.checked = false;

    // Update bookmarked filter state
    activeFilters.bookmarked = document.getElementById('filter-bookmarked').checked;

    // Reset to first page when filtering
    currentPage = 1;

    applyFilters();
}

// Apply all filters
function applyFilters() {
    // Start with all tools
    let result = [...aiTools];

    // Apply search filter if there's a search term
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm !== '') {
        result = result.filter(tool => {
            return (
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.category.toLowerCase().includes(searchTerm) ||
                (tool.features && tool.features.some(feature =>
                    feature.toLowerCase().includes(searchTerm)
                ))
            );
        });
    }

    // Apply category filter from active category tab
    if (activeCategory !== 'all') {
        result = result.filter(tool => tool.category === activeCategory);
    }

    // Apply pricing filters
    if (activeFilters.pricing.length > 0) {
        result = result.filter(tool => activeFilters.pricing.includes(tool.pricing));
    }

    // Apply bookmarked filter
    if (activeFilters.bookmarked) {
        result = result.filter(tool => bookmarkedTools.includes(tool.name));
    }

    // Update filtered tools and re-render
    filteredTools = result;
    renderTools();
}

// Clear all filters
function clearAllFilters() {
    // Reset search
    searchInput.value = '';

    // Reset filters
    document.querySelectorAll('input[value="free"], input[value="freemium"], input[value="paid"], input[value="bookmarked"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset active filters
    activeFilters = {
        pricing: [],
        bookmarked: false
    };

    // Reset active category tab
    document.querySelectorAll('.sidebar-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === 'all') {
            tab.classList.add('active');
        }
    });

    activeCategory = 'all';

    // Reset to first page
    currentPage = 1;

    // Check "All Tools" filter
    filterAllCheckbox.checked = true;

    // Reset filtered tools
    filteredTools = [...aiTools];
    renderTools();
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);