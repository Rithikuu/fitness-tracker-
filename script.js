const workoutData = [
    {
        day: 'Day 1',
        type: 'Outdoor Cardio',
        tagClass: 'tag-outdoor',
        icon: 'fa-person-running',
        exercises: 'Brisk walking (15 mins) + Light jogging (10 mins) + Planks (3 sets of 20 seconds)',
        duration: '45 min'
    },
    {
        day: 'Day 2',
        type: 'Home Full Body',
        tagClass: 'tag-home',
        icon: 'fa-house',
        exercises: 'Bodyweight Squats (3 × 12), Knee Push-ups (3 × 8), Lunges (3 × 10 each leg)',
        duration: '45 min'
    },
    {
        day: 'Day 3',
        type: 'Active Rest',
        tagClass: 'tag-rest',
        icon: 'fa-bed',
        exercises: 'Light walk or basic stretching (give your muscles a break!)',
        duration: '20-30 min'
    },
    {
        day: 'Day 4',
        type: 'Outdoor Cardio & Legs',
        tagClass: 'tag-outdoor',
        icon: 'fa-person-running',
        exercises: 'Jogging intervals (run 1 min, walk 2 mins) × 6 + Squat jumps (3 × 8)',
        duration: '45 min'
    },
    {
        day: 'Day 5',
        type: 'Home Upper Body & Core',
        tagClass: 'tag-home',
        icon: 'fa-house',
        exercises: 'Push-ups (regular or knee, 3 × 10), Chair dips using bed/chair (3 × 10), Crunches (3 × 15)',
        duration: '45 min'
    },
    {
        day: 'Day 6',
        type: 'Outdoor Full Body',
        tagClass: 'tag-outdoor',
        icon: 'fa-person-running',
        exercises: 'High Knees (3 × 30s), Jumping Jacks (3 × 40s), Mountain Climbers (3 × 30s)',
        duration: '45 min'
    },
    {
        day: 'Day 7',
        type: 'Rest',
        tagClass: 'tag-rest',
        icon: 'fa-bed',
        exercises: 'Complete rest or light yoga in your room',
        duration: '-'
    }
];

const mealData = [
    {
        day: 'Day 1',
        breakfast: '2 slices brown bread + 1 tbsp peanut butter + 1 banana',
        lunch: '2 Roti + 1 bowl Dal + Sabzi + Salad',
        dinner: '1 bowl Rice or 2 Roti + Dal + Sabzi',
        snacks: '1 handful roasted chana + Tea/Coffee'
    },
    {
        day: 'Day 2',
        breakfast: '1 cup plain Oats (soaked in warm milk) + 1 apple',
        lunch: '2 Roti + Dal + Sabzi + Curd (if available)',
        dinner: '2 Roti + Sabzi + Salad',
        snacks: '1 handful peanuts'
    },
    {
        day: 'Day 3',
        breakfast: '2 slices brown bread + 1 tbsp peanut butter + 1 banana',
        lunch: '2 Roti + Dal + Sabzi + Salad',
        dinner: '1 bowl Rice + Dal + Sabzi',
        snacks: '1 seasonal fruit (guava/orange)'
    },
    {
        day: 'Day 4',
        breakfast: '1 cup plain Oats (soaked in warm milk) + 1 banana',
        lunch: '2 Roti + Dal + Sabzi + Curd',
        dinner: '2 Roti + Sabzi + Salad',
        snacks: '1 handful roasted chana + Tea/Coffee'
    },
    {
        day: 'Day 5',
        breakfast: '2 slices brown bread + 1 tbsp peanut butter + 1 apple',
        lunch: '2 Roti + Dal + Sabzi + Salad',
        dinner: '1 bowl Rice + Dal + Sabzi',
        snacks: '1 handful peanuts'
    },
    {
        day: 'Day 6',
        breakfast: '1 cup plain Oats (soaked in warm milk) + 1 banana',
        lunch: '2 Roti + Dal + Sabzi + Curd',
        dinner: '2 Roti + Sabzi + Salad',
        snacks: '1 seasonal fruit (guava/orange)'
    },
    {
        day: 'Day 7',
        breakfast: '2 slices brown bread + 1 tbsp peanut butter + 1 banana',
        lunch: '2 Roti + Dal + Sabzi + Salad',
        dinner: '1 bowl Rice or 2 Roti + Dal + Sabzi',
        snacks: '1 handful roasted chana + Tea/Coffee'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // Populate Workouts
    const workoutsContainer = document.querySelector('.days-container');
    workoutData.forEach((data, index) => {
        const delay = index * 0.1;
        workoutsContainer.innerHTML += `
            <div class="day-card" style="animation: fadeIn 0.5s ease forwards ${delay}s; opacity: 0;">
                <div class="day-header">
                    <h3 class="day-title">${data.day}</h3>
                    <span class="day-tag ${data.tagClass}"><i class="fa-solid ${data.icon}"></i> ${data.type}</span>
                </div>
                <div class="exercise-list">
                    <strong>Exercises:</strong> ${data.exercises}<br>
                    <strong style="color: var(--text-main); margin-top: 0.5rem; display: inline-block;">
                        <i class="fa-regular fa-clock"></i> Duration: ${data.duration}
                    </strong>
                </div>
            </div>
        `;
    });

    // Populate Meals
    const mealsContainer = document.querySelector('.meals-container');
    mealData.forEach((data, index) => {
        const delay = index * 0.1;
        mealsContainer.innerHTML += `
            <div class="day-card" style="animation: fadeIn 0.5s ease forwards ${delay}s; opacity: 0;">
                <div class="day-header">
                    <h3 class="day-title">${data.day}</h3>
                </div>
                <div class="meal-grid">
                    <div class="meal-item">
                        <div class="meal-label"><i class="fa-solid fa-mug-hot"></i> Breakfast <span style="font-weight: normal; color: var(--text-muted);">(₹30-40)</span></div>
                        <div class="meal-desc">${data.breakfast}</div>
                    </div>
                    <div class="meal-item">
                        <div class="meal-label"><i class="fa-solid fa-bowl-rice"></i> Lunch <span style="font-weight: normal; color: var(--text-muted);">(Mess)</span></div>
                        <div class="meal-desc">${data.lunch}</div>
                    </div>
                    <div class="meal-item">
                        <div class="meal-label"><i class="fa-solid fa-utensils"></i> Dinner <span style="font-weight: normal; color: var(--text-muted);">(Mess)</span></div>
                        <div class="meal-desc">${data.dinner}</div>
                    </div>
                    <div class="meal-item">
                        <div class="meal-label"><i class="fa-solid fa-apple-whole"></i> Snacks <span style="font-weight: normal; color: var(--text-muted);">(₹20-30)</span></div>
                        <div class="meal-desc">${data.snacks}</div>
                    </div>
                </div>
            </div>
        `;
    });

    // Modal Logic
    const editBtn = document.getElementById('edit-profile-btn');
    const modal = document.getElementById('edit-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const editForm = document.getElementById('edit-profile-form');

    // Values in DOM
    const valGoal = document.getElementById('val-goal');
    const valWeight = document.getElementById('val-weight');
    const valDiet = document.getElementById('val-diet');
    const valBudget = document.getElementById('val-budget');
    const valEnvironment = document.getElementById('val-environment');
    const valSchedule = document.getElementById('val-schedule');
    const valWorkoutTime = document.getElementById('val-workout-time');
    const valFoodSource = document.getElementById('val-food-source');

    // Load from local storage (Memory Tool)
    function loadProfileData() {
        const savedData = localStorage.getItem('hostelFitProfile');
        if (savedData) {
            try {
                const profile = JSON.parse(savedData);
                if (profile.goal) valGoal.textContent = profile.goal;
                if (profile.weight) valWeight.textContent = profile.weight;
                if (profile.diet) valDiet.textContent = profile.diet;
                if (profile.budget) valBudget.textContent = profile.budget;
                if (profile.environment) valEnvironment.textContent = profile.environment;
                if (profile.schedule) valSchedule.textContent = profile.schedule;
                if (profile.workoutTime) valWorkoutTime.textContent = profile.workoutTime;
                if (profile.foodSource) valFoodSource.textContent = profile.foodSource;
            } catch (e) {
                console.error("Error parsing profile data", e);
            }
        }
    }
    
    // Call loadProfileData on startup
    loadProfileData();

    // Inputs in Modal
    const inputGoal = document.getElementById('input-goal');
    const inputWeight = document.getElementById('input-weight');
    const inputDiet = document.getElementById('input-diet');
    const inputBudget = document.getElementById('input-budget');
    const inputEnvironment = document.getElementById('input-environment');
    const inputSchedule = document.getElementById('input-schedule');
    const inputWorkoutTime = document.getElementById('input-workout-time');
    const inputFoodSource = document.getElementById('input-food-source');

    function openModal() {
        // Populate inputs with current values
        inputGoal.value = valGoal.textContent;
        inputWeight.value = valWeight.textContent;
        inputDiet.value = valDiet.textContent;
        inputBudget.value = valBudget.textContent;
        inputEnvironment.value = valEnvironment.textContent;
        inputSchedule.value = valSchedule.textContent;
        inputWorkoutTime.value = valWorkoutTime.textContent;
        inputFoodSource.value = valFoodSource.textContent;
        
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    if (editBtn) editBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of it
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Update DOM with new values
            valGoal.textContent = inputGoal.value;
            valWeight.textContent = inputWeight.value;
            valDiet.textContent = inputDiet.value;
            valBudget.textContent = inputBudget.value;
            valEnvironment.textContent = inputEnvironment.value;
            valSchedule.textContent = inputSchedule.value;
            valWorkoutTime.textContent = inputWorkoutTime.value;
            valFoodSource.textContent = inputFoodSource.value;
            
            // Save to localStorage (Memory Tool)
            const profileData = {
                goal: inputGoal.value,
                weight: inputWeight.value,
                diet: inputDiet.value,
                budget: inputBudget.value,
                environment: inputEnvironment.value,
                schedule: inputSchedule.value,
                workoutTime: inputWorkoutTime.value,
                foodSource: inputFoodSource.value
            };
            localStorage.setItem('hostelFitProfile', JSON.stringify(profileData));
            
            closeModal();
        });
    }

    // Chatbot Logic
    const chatToggler = document.getElementById('chatbot-toggler');
    const chatContainer = document.getElementById('chatbot-container');
    const chatCloseBtn = document.getElementById('chat-close-btn');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const chatBody = document.getElementById('chat-body');

    if (chatToggler && chatContainer) {
        chatToggler.addEventListener('click', () => {
            chatContainer.classList.toggle('active');
        });

        chatCloseBtn.addEventListener('click', () => {
            chatContainer.classList.remove('active');
        });

        const appendMessage = (text, sender) => {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', sender);
            msgDiv.textContent = text;
            chatBody.appendChild(msgDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        };

        const generateBotResponse = (userText) => {
            const lowerText = userText.toLowerCase();
            let response = "I'm not sure about that. Try asking me about your diet, workouts, or schedule!";
            
            if (lowerText.match(/diet|food|meal|eat|hungry|dinner|lunch|breakfast|break fest|snack/)) {
                response = "Remember to keep your diet strictly vegetarian and stick to your ₹100 budget. For meals, fill half your plate with veggies! Since you are at the hostel mess, skip the desserts and focus on dal and sabzi.";
            } else if (lowerText.match(/workout|exercise|gym|train|run|jog|push|squat/)) {
                response = "You have 45 mins every morning. Stick to the Weekly Workout Plan, and don't forget your 5-min warm-ups and cooldowns!";
            } else if (lowerText.match(/water|drink|thirst|hydrate/)) {
                response = "Hydration is key! Aim for 3 - 3.5 liters daily. Carry your water bottle to classes 9 to 5.";
            } else if (lowerText.match(/sleep|rest|tired|tierd|exhaust|energy|fatigue/)) {
                response = "Feeling tired? Try to get 7-8 hours of sleep. Sleeping by 11:30 PM is highly recommended so you have energy for your 9 AM classes!";
            } else if (lowerText.match(/budget|money|cost|rupee|₹/)) {
                response = "You have a ₹100 daily budget. Buy peanut butter, roasted chana, and fruits on Sunday to sort your snacks economically.";
            } else if (lowerText.match(/hi|hello|hey|greetings|morning/)) {
                response = "Hello! Ready to crush your -4kg goal today? How can I help you with your fitness journey?";
            }

            setTimeout(() => {
                appendMessage(response, 'bot');
            }, 600);
        };

        const handleSend = () => {
            const text = chatInput.value.trim();
            if (text) {
                appendMessage(text, 'user');
                chatInput.value = '';
                generateBotResponse(text);
            }
        };

        chatSendBtn.addEventListener('click', handleSend);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSend();
            }
        });
    }
});
