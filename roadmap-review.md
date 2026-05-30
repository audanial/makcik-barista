# MakCik Barista Roadmap Review

Date: 2026-05-30

## Executive Summary

The roadmap is directionally correct, but the sprint boundaries are too clean for a production launch whose main goal is event bookings. Trust, event packages, FAQ, SEO basics, analytics, and QA are not independent later-stage improvements. They are part of the same conversion system.

The highest-value work is not "storytelling" by itself. The highest-value work is event-booking confidence: real proof, clear packages, buyer reassurance, and a low-friction WhatsApp path.

If the goal is public launch and near-term bookings, Sprint 3.0 and Sprint 3.1 should be merged into one conversion sprint. SEO and analytics should move earlier as launch infrastructure. Delivery improvements should move after the event-booking funnel unless delivery is expected to drive revenue immediately.

## Current Codebase Observations

The site already has a solid foundation:

- Home, Menu, Events, About, and Delivery pages exist.
- WhatsApp ordering is implemented through `waLink()`.
- Cart, coffee customization, add-ons, delivery info, and event booking form are functional.
- The brand direction is coherent: warm, local, family-run, green/cream/gold, editorial typography.
- Events already have a meaningful page, school positioning, booking form, and photo carousel.

The main production risks are:

- The site has limited proof at the point of conversion.
- The event booking page asks for commitment before fully educating the buyer.
- Event package expectations are unclear.
- The menu has no product imagery.
- Some real event images feel authentic but raw, with visible phone timestamps/watermarks.
- SEO/local discovery is not launch-ready.
- Analytics and conversion tracking are not present.
- The WhatsApp helper still uses the testing number in `lib/whatsapp.ts`; this is launch-blocking.
- No test runner is configured, and lint currently reports 2 warnings.

## 1. Is This The Correct Sprint Order?

Partially.

The current order:

1. Sprint 3.0 - Trust & Storytelling
2. Sprint 3.1 - FAQ & Event Packages
3. Sprint 3.2 - Delivery Experience
4. Sprint 3.3 - Mobile QA & UX Audit
5. Sprint 3.4 - SEO & Local Discovery
6. Sprint 3.5 - Launch Preparation
7. Sprint 4.0 - Public Launch

This is logical from a content-production perspective, but not ideal from a booking-growth perspective.

The problem is that Sprint 3.0 and Sprint 3.1 are artificially separated. Trust content without event packages is emotionally appealing but incomplete. Event packages without proof and story are transactional but not convincing. These should be built together.

SEO is also too late. Metadata, Open Graph, structured data, sitemap, robots, local-business schema, and indexability checks should happen before final QA so they can be validated during launch testing.

Delivery should not come before the event funnel unless delivery orders are strategically equal to event bookings. Based on the stated primary business goals, delivery is secondary.

## 2. Which Sprint Delivers The Highest Business Value?

Highest business value: a merged Sprint 3.0/3.1 focused on event conversion.

The highest-value deliverables are:

- Testimonials and social proof.
- Real event context: schools, community, private events, corporate, kenduri.
- Event package examples.
- Event FAQ.
- Booking reassurance.
- Stronger event CTAs on home and events pages.
- Cleaner event imagery and captions.
- Reduced booking-form friction.

This directly supports the main revenue path: event bookings.

Delivery improvements are useful, but likely lower average order value. SEO is important, but SEO value compounds over time and will not beat direct event conversion work in the next 30 days unless paired with Google Business/Profile work and local search intent.

## 3. What Should Be Merged, Split, Moved Earlier, Or Removed?

### Merge

Merge Sprint 3.0 and Sprint 3.1 into one sprint:

**Event Trust & Booking Conversion**

Reason: Trust, storytelling, FAQ, packages, and buyer reassurance all answer the same customer question: "Can I trust this business with my event?"

### Move Earlier

Move core SEO and analytics earlier.

Minimum SEO and tracking should happen before mobile QA:

- Page titles and descriptions.
- Open Graph images.
- Local business structured data.
- Sitemap and robots.
- Google Search Console readiness.
- Basic analytics.
- WhatsApp click tracking where feasible.
- Event form submit/click tracking.

Reason: QA should validate not only layout, but launch behavior, metadata, tracking, and discoverability.

### Move Later

Move Delivery Experience after the event funnel unless delivery is an urgent launch campaign.

Reason: Delivery is already functional. It can be improved, but it is not the primary business goal. Event booking confidence is more important.

### Split

Split Launch Preparation into two categories:

1. Launch blockers
2. Launch polish

Launch blockers must be completed before public traffic. Launch polish can continue after launch.

### Remove Or Defer

Do not add an AI chatbot before launch.

Reason: The site does not yet have enough structured content, package logic, FAQ coverage, trust proof, and tracking to support a chatbot well. A chatbot before the basic event funnel is finished would add maintenance risk without solving the primary conversion problem.

## 4. Important Launch-Blocking Work Missing

The roadmap is missing several production-readiness items.

### Business And Conversion Blockers

- Replace the testing WhatsApp number with the real launch number.
- Confirm every WhatsApp CTA opens the correct destination and message.
- Make email optional in the event form unless MakCik Barista truly needs it.
- Add event package examples or starting guidance.
- Add event FAQ.
- Add trust proof: testimonials, past event names/types, school/community credibility.
- Add clear booking response expectation.
- Add minimum booking lead time.
- Add event coverage area or travel note.
- Add setup requirements: space, power, indoor/outdoor, table/stall/truck options.

### Technical Launch Blockers

- Run and fix lint warnings.
- Run production build.
- Verify all routes render in production mode.
- Add metadata completeness for every page.
- Add Open Graph image strategy.
- Add sitemap and robots.
- Add local business structured data.
- Add favicon/app icon review.
- Add performance checks for image sizes.
- Remove or crop low-quality/watermarked imagery where it affects premium perception.
- Ensure all external links work.
- Ensure social links are correct.
- Confirm WhatsApp messages are readable on mobile.

### Measurement Blockers

- Add analytics before launch.
- Track key events: WhatsApp floating button clicks, event booking submits, menu cart opens, send order clicks, Instagram/TikTok clicks.
- Define success metrics before public launch.

Suggested launch metrics:

- Event booking WhatsApp clicks.
- Event form completion rate.
- Menu-to-cart rate.
- Cart-to-WhatsApp rate.
- Delivery inquiry clicks.
- Social click-throughs.
- Mobile bounce rate.

### Operational Blockers

- Confirm who responds to WhatsApp and during what hours.
- Prepare saved WhatsApp replies for event inquiries.
- Prepare event quote template.
- Prepare delivery availability response.
- Prepare "fully booked" response.
- Prepare package/photo assets for sending manually after inquiry.

## 5. What Would A Professional Agency Do Differently?

A professional agency would treat this less like a page roadmap and more like a launch funnel.

They would likely do the following:

- Define the primary conversion path first: Home -> Events -> Booking WhatsApp.
- Build the events page around buyer objections, not just brand storytelling.
- Add proof above or near the booking form.
- Put package examples before the form, so users know what they are asking for.
- Add FAQ before or after the form to reduce WhatsApp back-and-forth.
- Use real captions on event photos: event type, location, crowd, setup.
- Curate images more aggressively.
- Add analytics before public traffic.
- Create launch QA checklists before the last sprint, not during the last sprint.
- Create a campaign landing path for schools/community events if those are the best early customers.
- Prepare Google Business Profile and local search presence alongside the website.
- Launch with "good enough and trackable", then improve using inquiry data.

The strongest agency move would be to build a dedicated event-booking funnel, not just improve every page equally.

## 6. If Maximizing Bookings Within 30 Days, Reorder The Sprints Like This

### Week 1: Event Conversion Foundation

Focus on the event funnel.

- Homepage trust strip.
- Homepage event CTA refinement.
- Events page proof blocks.
- Testimonials.
- Event package examples.
- Event FAQ.
- Booking-form friction reduction.
- WhatsApp number correction.

### Week 2: Credibility Assets And Local Launch Basics

Focus on making the business feel real and findable.

- Event photo curation.
- Captions for past events.
- School/community event storytelling.
- About page credibility improvements.
- Local business metadata.
- Open Graph images.
- Sitemap/robots.
- Google Search Console readiness.
- Google Business Profile alignment.

### Week 3: Mobile QA, Tracking, And Funnel Testing

Focus on preventing lost leads.

- Mobile viewport testing.
- Accessibility review.
- Event form testing.
- Cart/order testing.
- WhatsApp message testing.
- Cross-browser checks.
- Analytics events.
- Production build verification.
- Performance/image checks.

### Week 4: Delivery Polish, Content Audit, And Launch

Focus on secondary revenue and final readiness.

- Delivery page clarity.
- Bulk order messaging.
- Menu clarity and item confidence.
- Final content audit.
- Launch checklist.
- Public launch.
- Monitor inquiries and adjust copy based on actual questions.

## 7. Final Recommended Roadmap From Today Until Launch

### Sprint 3.0 - Event Trust & Booking Conversion

Goal: Make visitors confident enough to inquire about an event.

Scope:

- Add homepage trust improvements.
- Add social proof/testimonials.
- Add real event context by event type.
- Add event package examples.
- Add event FAQ.
- Add booking reassurance.
- Improve event page hierarchy.
- Add proof near the booking form.
- Reduce event-form friction, especially required email.
- Correct the WhatsApp number before any public testing.

Why this first:

This is the highest business-value sprint because it directly supports event bookings.

### Sprint 3.1 - Local Credibility & Discovery Foundation

Goal: Make MakCik Barista look real, findable, and shareable.

Scope:

- Improve metadata across pages.
- Add Open Graph image strategy.
- Add local business structured data.
- Add sitemap and robots.
- Prepare Google indexing.
- Align website details with Google Business Profile and social profiles.
- Add clearer contact/location/service-area information.
- Curate event imagery and captions.

Why this second:

SEO should not wait until the end. It should be in place before final QA and public sharing.

### Sprint 3.2 - Mobile QA, Accessibility, And Conversion Testing

Goal: Ensure the funnel works on real devices before launch.

Scope:

- Test mobile layouts across key breakpoints.
- Test navigation, cart drawer, coffee picker, and event form.
- Test WhatsApp links and message formatting.
- Review focus states, labels, keyboard behavior, and modal behavior.
- Run lint and production build.
- Fix launch-impacting warnings or errors.
- Validate image loading and performance.

Why this third:

Once conversion content and SEO foundations exist, QA can validate the actual launch candidate.

### Sprint 3.3 - Analytics & Launch Instrumentation

Goal: Make launch measurable.

Scope:

- Add analytics.
- Track WhatsApp CTA clicks.
- Track event booking form submits.
- Track cart opens and send-order clicks.
- Track social clicks.
- Define launch dashboard metrics.
- Confirm privacy/cookie implications if applicable.

Why this before launch:

Without tracking, public launch gives traffic but not learning.

### Sprint 3.4 - Delivery & Bulk Order Experience

Goal: Improve secondary revenue paths without distracting from event bookings.

Scope:

- Improve delivery page clarity.
- Clarify coverage and fees.
- Improve minimum-order messaging.
- Add bulk order messaging.
- Clarify delivery hours and confirmation process.
- Improve cart drawer reassurance.

Why this later:

The delivery flow is already functional. It deserves polish, but it should not delay event-booking readiness.

### Sprint 3.5 - Final Launch Preparation

Goal: Freeze content and prepare production.

Scope:

- Full content audit.
- Final image optimization.
- Final link checks.
- Final WhatsApp checks.
- Final metadata/social preview checks.
- Vercel production build validation.
- Domain setup.
- Search Console setup.
- Analytics verification.
- Create operational WhatsApp reply templates.
- Create launch-day monitoring checklist.

Why this last:

This is the release gate, not a place to discover major UX or SEO gaps for the first time.

### Sprint 4.0 - Public Launch

Goal: Launch, monitor, and respond quickly.

Scope:

- Publish production site.
- Submit sitemap.
- Check analytics in real time.
- Test all primary CTAs after deployment.
- Monitor WhatsApp inquiries.
- Record common questions.
- Patch copy within 48 to 72 hours based on real user confusion.

## Recommended 30-Day Priority Ranking

1. WhatsApp number correction and CTA validation.
2. Event packages, FAQ, and testimonials.
3. Homepage and events page trust improvements.
4. Event photo curation and captions.
5. Metadata, Open Graph, structured data, sitemap, robots.
6. Analytics and conversion tracking.
7. Mobile QA and production build validation.
8. Delivery and bulk order polish.
9. Final launch checklist.

## Final Recommendation

The current roadmap is close, but it is too sequential around page themes. Reframe the remaining work around one question:

"What must a parent, teacher, event organizer, or office admin see before they feel safe WhatsApping MakCik Barista for a booking?"

That answer is proof, packages, FAQ, reassurance, clear contact, and a working mobile funnel. Build those first. Polish delivery and broader content after the event booking funnel is credible, measurable, and tested.

