# ET Implementation Tasks

## Phase 1: Core Authentication
- [ ] Integrate Web Utama SSO token login.
- [ ] Implement session management for authenticated students.

## Phase 2: Access & Entry
- [ ] Develop the Unified Access Code input page.
- [ ] Implement server-side validation for the code against the `quiz_access_config` table.
- [ ] Track one-time code entry in the `user_access` table to permanently unlock the quiz.

## Phase 3: Quiz Engine & Logic
- [ ] **Question Management**:
  - [ ] Implement session-based question fetching.
  - [ ] Implement randomized question ordering per user.
- [ ] **Dynamic Peer Reference**:
  - [ ] Implement cross-program logic (TI asks TIN and vice-versa).
  - [ ] Code the dynamic limit calculation based on program population in the `users` table.
- [ ] **Flagging System**:
  - [ ] Implement flagging state in the database/session.
  - [ ] Add blocking logic when flag count reaches 3.
  - [ ] Implement unflagging workflow upon question resolution.

## Phase 4: UI/UX & Frontend
- [ ] Build the Quiz UI based on the modern design specs.
- [ ] Implement mobile-responsive views.
- [ ] **Congratulations Template**:
  - [ ] Create a "Congratulations" component/page.
  - [ ] Integrate animations or celebratory elements.

## Phase 5: Persistence & Testing
- [ ] Save all answers and references to `user_answers`.
- [ ] Unit tests for dynamic limit and flagging logic.
- [ ] Manual verification of the user flow.
