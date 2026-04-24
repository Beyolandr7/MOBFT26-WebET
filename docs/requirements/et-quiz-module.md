# ET Quiz Module Requirements

## Overview
The ET Quiz is an interactive module for the Engineering Tour (ET) at MOB FT 2026. It facilitates cross-program interaction and knowledge sharing between students.

## User Journey
1.  **Login**: User authenticates via Web Utama token.
2.  **Access Verification**: User inputs the **Unified Access Code** (a single code shared by all participants) to enter the quiz. This is a one-time entry that unlocks the quiz module for the user.
3.  **Quiz Participation**:
    *   Answer questions related to various engineering departments.
    *   Interact with peers for cross-program references.
4.  **Completion**: View a congratulations screen upon finishing.

## Core Features

### 1. SSO Authentication
- Seamless login integration with the main MOB system (Web Utama).
- Uses shared tokens for session management.

### 2. Unified Access Code (One-Time)
- Prevents premature quiz entry.
- A single, unified code used by all participants via text input.
- Once entered successfully, the quiz is permanently unlocked for the user's session.

### 3. Peer Reference Logic (Dynamic)
- **Cross-Program Requirement**: 
  - Students from **Teknik Informatika (TI)** must ask/reference students from **Teknik Industri (TIN)** for TIN-related questions.
  - This promotes networking and learning across different engineering disciplines.
- **Dynamic Reference Limit**: 
  - The number of peer names a user can submit as references is dynamically calculated.
  - The calculation is based on the total population of students in each respective program (referencing the `users` table).

### 4. Flagging System
- Users can flag questions they find difficult or want to review later.
- **Constraints**:
  - Maximum of **3 flags** allowed at any time.
  - If the flag limit (3) is reached, the user is **blocked** from proceeding to the next question.
  - To continue, the user must return to a flagged question, provide an answer, and unflag it.

### 5. UI/UX Specifications
- Modern, interactive quiz interface.
- Real-time flagging indicators.
- **Congratulations Page**: A dedicated template to celebrate completion.

## Database Schema Integration
- **`users`**: To check student `programme` and calculate dynamic reference limits.
- **`questions`**: Source of all quiz content and categories.
- **`user_answers`**: Stores responses and peer reference data (`user_selected_name`, `user_selected_nrp`, etc.).
- **`quiz_access_config`**: Stores the unified access code for the entire quiz module.
- **`user_access`**: Records users who have successfully entered the unified code to unlock the quiz.
- **`question_flags`**: Tracks flagged questions per user (enforcing the 3-flag limit).
