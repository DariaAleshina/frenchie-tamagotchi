import { gameRules } from '../contentGameLogic';
const { title, rules } = gameRules;

function RulesSection() {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-10">
      <h2 className="text-3xl mb-5 text-center">{title}</h2>
      <ul className="font-anta text-sm md:text-base font-normal max-w-md mr-auto ml-auto flex flex-col gap-4">
        {rules.map(rule => (
          <li key={rule.text} className="flex gap-4">
            <p>{rule.emoji}</p>
            <p>{rule.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RulesSection;
