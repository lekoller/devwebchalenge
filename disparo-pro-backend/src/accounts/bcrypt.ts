import * as bcrypt from 'bcrypt';

const rounds = 10;

export const passwordAssistant = {
  hash: async (password: string) => {
    return await bcrypt.hash(password, rounds);
  },

  compare: async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
  },
};
