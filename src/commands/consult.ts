import { Command, Flags } from '@oclif/core';
import { execSync } from 'node:child_process';

export default class Consult extends Command {
    static description = 'Consults the expert on provided questions';

    static flags = {
      question: Flags.string({
        char: 'q',
        description: 'The question to ask',
        required: true,
      }),
    };

    async run(): Promise<void> {
      const { flags } = await this.parse(Consult);
      const {question} = flags;

      try {
        // Execute the answer script (my "brain")
        const answer = this.getAnswer(question);
        this.log(JSON.stringify({ answer })); // send answer in a structured way for easy parsing
      } catch (error) {
        this.error(`Error consulting the expert: ${error}`);
      }
    }

    private getAnswer(question: string): string {
      // Execute a script containing my "brain" logic.  This can be upgraded to a service later.
      const answerScript = process.cwd() + '/answer-script.sh';
      const response = execSync(`bash ${answerScript} "${question}"`);
      return response.toString().trim();
    }
}