/**
 * This function validates user input when submit add habit form
 */
export const validateHabit = (habit) => {
  const { name, description, identity } = habit;
  if (name.length < 1 || description < 1 || !identity) {
    throw new Error("Invalid habit information");
  }
};

/**
 * This function validates user input when submit add identity form
 */
export const validateIdentity = (identiity) => {
  const { name, description } = identiity;
  if (name.length < 1 || description < 1) {
    throw new Error("Invalid identiity information");
  }
};
