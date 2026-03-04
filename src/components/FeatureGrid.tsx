"use client";

export default function FeatureGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Multilingual */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a]">
            <div className="bg-[#0f0f0f] rounded-lg p-4 mb-6 border border-[#2a2a2a]">
              <p className="font-mono text-xs text-gray-300">
                So we have to deliver this project <span className="text-[#00d4d4]">mañana.</span>
              </p>
            </div>
            <h3 className="font-serif text-xl mb-2">Multilingual</h3>
            <p className="font-mono text-xs text-gray-400">
              Write like you like to speak, effortlessly.
            </p>
          </div>

          {/* Auto Editing */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a]">
            <div className="bg-[#0f0f0f] rounded-lg p-4 mb-6 border border-[#2a2a2a]">
              <p className="font-mono text-xs">
                <span className="text-gray-500 line-through">the team event soon, you know,</span>
              </p>
              <p className="font-mono text-xs mt-1">
                <span className="text-[#00d4d4] font-medium">really, really</span>{" "}
                <span className="text-gray-300">important to get on</span>
              </p>
              <p className="font-mono text-xs mt-1">
                <span className="text-gray-300">board.</span>{" "}
                <span className="text-[#00d4d4] font-medium">And um,</span>{" "}
                <span className="text-gray-300">we could pick the</span>
              </p>
              <p className="font-mono text-xs mt-1 text-gray-300">
                theme later.&quot;
              </p>
              <span className="float-right text-[#00d4d4] text-xs mt-2">Formatting</span>
            </div>
            <h3 className="font-serif text-xl mb-2">Auto Editing</h3>
            <p className="font-mono text-xs text-gray-400">
              Automatic cleanup, so you write what you meant to say.
            </p>
          </div>

          {/* Modes */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a]">
            <div className="flex gap-2 mb-6">
              {["Notes", "Chatting", "Email", "Coding"].map((mode) => (
                <div
                  key={mode}
                  className="flex flex-col items-center gap-1 bg-[#0f0f0f] rounded-lg p-3 border border-[#2a2a2a] flex-1"
                >
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00d4d4] to-[#006666]" />
                  <span className="font-mono text-[10px] text-gray-400">{mode}</span>
                </div>
              ))}
            </div>
            <h3 className="font-serif text-xl mb-2">Modes</h3>
            <p className="font-mono text-xs text-gray-400">
              Customize how Monologue writes and behaves based on the app you&apos;re using.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
