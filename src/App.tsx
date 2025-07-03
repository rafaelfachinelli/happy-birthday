import { motion } from 'framer-motion';

const message = [
  "Tem gente que nasce no mundo e simplesmente... soma. Soma na vida da família, dos amigos, e às vezes — como no meu caso — soma na vida de alguém que mal esperava ser tocado assim, tão de repente.",
  "Hoje é teu dia. E eu não queria só te desejar parabéns — queria te lembrar o quanto é raro encontrar alguém com tua sensibilidade, teu jeitinho quieto mas cheio de presença, teu carinho discreto que transborda mesmo sem fazer barulho.",
  "Você é daquelas pessoas que ficam na memória mesmo que o tempo passe. E se hoje eu posso te dizer algo, é que eu me sinto feliz por ter te conhecido justo agora: do teu jeitinho novo, mais consciente, mais leve... mais Ju.",
  "Parabéns por ser quem você é. E obrigado por, sem nem perceber, já ter deixado algo bonito em mim também.",
  "Com carinho,\nRafael Fachinelli"
];

function ConfettiHearts() {
  // Simple animated hearts for cuteness
  const hearts = Array.from({ length: 12 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex justify-center items-start">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -40, opacity: 0, x: (i - 6) * 20 }}
          animate={{ y: [0, 300, 0], opacity: [0, 1, 0] }}
          transition={{
            delay: i * 0.15 + 0.5,
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
          className="absolute text-lilac-strong text-2xl select-none"
          style={{ left: `calc(50% + ${(i - 6) * 24}px)` }}
        >
          <span role="img" aria-label="heart">💖</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function App() {
  // Always force dark mode on the root element
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-lilac-dark p-2 transition-colors duration-500">
      <ConfettiHearts />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-xl bg-black/80 p-6 sm:p-8 flex flex-col items-center"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-pacifico text-3xl sm:text-4xl font-extrabold text-lilac-strong mb-6 text-center"
        >
          Feliz aniversário, Ju 🎂
        </motion.h1>
        <div className="flex flex-col gap-4 w-full">
          {message.map((para, idx) => (
            <motion.p
              key={idx}
              className="whitespace-pre-line text-lilac text-lg sm:text-xl text-center leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.2 + idx * 0.2, duration: 0.7 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
        <div className="w-full flex flex-col items-center mt-2">
          <span className="text-lilac text-sm opacity-70 mt-2">03/07/2025</span>
        </div>
        <motion.div
          initial={{ y: 0, scale: 1 }}
          animate={{
            y: [0, -10, 0, 10, 0],
            scale: [1, 1.2, 1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="mt-2"
        >
          <span className="text-4xl">💗</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
