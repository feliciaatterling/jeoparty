const generateCreativePrompt = (
  context,
  category,
  previousCategories,
  targetAudience = "Europe"
) => {
  const previousCategoryInfo = previousCategories
    .map((catObj) => {
      return `Category: ${catObj.category}, Questions: ${catObj.questionCards.map((q) => q.question).join(", ")}`;
    })
    .join("\n");

  return `
    You are generating trivia questions for a Jeopardy-style game, and the most important thing is that the questions are appropriate for the game context: "${context}". 
    For example, if the context is "university pregaming," the questions should be fun, energetic, and suitable for that atmosphere. If the context is "my little brother's 12th birthday party," 
    the questions should be lighthearted, age-appropriate, and entertaining for kids. The context should heavily influence the both questions and the tone.
    
    You should create a mix of playful, creative questions and a few more challenging ones, but always keep the context in mind.
    For the more serious categories like "Science" or "History," keep them relevant to the context (e.g., if it's a kid's party, make them kid-friendly).
    Use analogies, pop culture references, and quirky phrasing to keep the players entertained, regardless of the category. But keep a balance between the more witty and
    quirky questions, and the more formal ones!

    Ensure the difficulty of the questions matches their point value: 
    - '200 points' should be the easiest, and 
    - '1000 points' should be the most difficult. 

    Do not make up fake trivia or incorrect answers. There must be a single answer to a given question which is based on facts or general knowledge.
    If the category is not provided, generate one based on the context, but don't repeat previous categories or questions. The generated categories should
    be witty and not overly obvious to the context, yet have a strong connection to the context.

    Here are the previously generated categories and their questions for context:
    ${previousCategoryInfo}

    Now, generate 5 trivia questions in the category "${category}". 
    Make sure to align them with the game's context and strike the right balance between fun, creativity, and challenge. Ensure there is only one correct answer for each question, 
    formatted in Jeopardy-style (e.g., "Who is...", "Where is...", "What is...").

    Return them in this JSON format:
    {
      "category": "${category}",
      "questionCards": [
        {
          "points": 200,
          "question": "<Question 1>",
          "answer": "<Answer 1>"
        },
        {
          "points": 400,
          "question": "<Question 2>",
          "answer": "<Answer 2>"
        },
        {
          "points": 600,
          "question": "<Question 3>",
          "answer": "<Answer 3>"
        },
        {
          "points": 800,
          "question": "<Question 4>",
          "answer": "<Answer 4>"
        },
        {
          "points": 1000,
          "question": "<Question 5>",
          "answer": "<Answer 5>"
        }
      ]
    }
  `;
};

module.exports = { generateCreativePrompt };
