import { useState, useEffect } from 'react';
import ShaderBackground from './ui/shader-background';
import { 
  Play, 
  Cpu, 
  Sliders, 
  Sparkles, 
  Code, 
  RefreshCw, 
  Info,
  Layers,
  Zap,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function ShaderPage() {
  const [hue, setHue] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<'info' | 'controls' | 'shader'>('info');
  const [copied, setCopied] = useState(false);
  const [fps, setFps] = useState<number>(60);
  const [resolution, setResolution] = useState({ w: 1920, h: 1080 });

  // Simulate FPS variations slightly for technical immersion
  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(58 + Math.random() * 3));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Update resolution on resize
  useEffect(() => {
    const updateRes = () => {
      setResolution({ w: window.innerWidth, h: window.innerHeight });
    };
    updateRes();
    window.addEventListener('resize', updateRes);
    return () => window.removeEventListener('resize', updateRes);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`// To use in your React project:\nimport ShaderBackground from '@/components/ui/shader-background';\n\nfunction App() {\n  return (\n    <div className="relative">\n      <ShaderBackground />\n      <main className="relative z-10">Your content here</main>\n    </div>\n  );\n}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shaderCode = `precision highp float;
uniform vec2 iResolution;
uniform float iTime;

const float overallSpeed = 0.2;
const float gridSmoothWidth = 0.015;
const float scale = 5.0;
const vec4 lineColor = vec4(0.4, 0.2, 0.8, 1.0);
const int linesPerGroup = 16;

// Mathematics of the plasma field
float random(float t) {
  return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  // Dynamic line rendering with warp-distortion...
  gl_FragColor = vec4(finalColor, 1.0);
}`;

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between font-sans overflow-hidden bg-slate-950">
      {/* Dynamic Styled Shader Background with stateful styling filter */}
      <div 
        className="fixed inset-0 transition-all duration-300 pointer-events-none"
        style={{
          filter: `hue-rotate(${hue}deg) brightness(${brightness}%) contrast(${contrast}%)`
        }}
      >
        <ShaderBackground />
      </div>

      {/* Aesthetic ambient vignette */}
      <div className="fixed inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Vision & Header */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-300 backdrop-blur-md uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              WebGL Procedural Sandbox
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              Aetherial <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">Plasma</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Experience dynamic, mathematical turbulence rendered directly on the GPU. Powered by complex GLSL fragment shaders, this canvas generates an organic plasma mesh with sine-warped coordinate fields and high-frequency grids.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                WebGL 1.0 Pipeline
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
                <Layers className="w-3.5 h-3.5 text-fuchsia-400" />
                16 Multi-lines
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                60 FPS Target
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Controller deck */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/65 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/20 flex flex-col h-[520px]">
              
              {/* Tab Navigation */}
              <div className="flex border-b border-slate-800/80 bg-slate-950/40 p-1.5 gap-1">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === 'info'
                      ? 'bg-slate-800 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <Info className="w-4 h-4" />
                  Tech Spec
                </button>
                <button
                  onClick={() => setActiveTab('controls')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === 'controls'
                      ? 'bg-slate-800 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <Sliders className="w-4 h-4" />
                  Visual Tuning
                </button>
                <button
                  onClick={() => setActiveTab('shader')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === 'shader'
                      ? 'bg-slate-800 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  GLSL Snippet
                </button>
              </div>

              {/* Tab Contents */}
              <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === 'info' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-950/40 border border-slate-800/50 p-4 rounded-xl">
                        <span className="block text-[11px] text-slate-500 font-mono uppercase tracking-wider">Rendering Pipeline</span>
                        <span className="block text-lg font-bold text-slate-200 mt-1">Fragment-Bound</span>
                        <span className="block text-xs text-slate-400 mt-0.5">Calculated per pixel</span>
                      </div>
                      <div className="bg-slate-950/40 border border-slate-800/50 p-4 rounded-xl">
                        <span className="block text-[11px] text-slate-500 font-mono uppercase tracking-wider">Dynamic Resolution</span>
                        <span className="block text-lg font-bold text-slate-200 mt-1">{resolution.w} × {resolution.h}</span>
                        <span className="block text-xs text-slate-400 mt-0.5">Responsive canvas scale</span>
                      </div>
                      <div className="bg-slate-950/40 border border-slate-800/50 p-4 rounded-xl">
                        <span className="block text-[11px] text-slate-500 font-mono uppercase tracking-wider">GPU Refresh Rate</span>
                        <span className="block text-lg font-bold text-emerald-400 mt-1">{fps} Hz</span>
                        <span className="block text-xs text-slate-400 mt-0.5">Hardware accelerated</span>
                      </div>
                      <div className="bg-slate-950/40 border border-slate-800/50 p-4 rounded-xl">
                        <span className="block text-[11px] text-slate-500 font-mono uppercase tracking-wider">Active State</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 mt-2 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                          RUNNING
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Core Algorithms</h3>
                      <div className="space-y-2.5 text-sm text-slate-300">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span><strong>Sine-Cosine Warping:</strong> Coordinates are continuous field-deformed over time, yielding smoke-like liquid flows.</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span><strong>16 Parallel Waves:</strong> Nested procedural groups containing coordinate modulations draw complex volumetric interference.</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span><strong>Dual-Stop Gradient Backing:</strong> Soft background shading blending with high-contrast glowing neon strands.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'controls' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-400 leading-relaxed font-mono">
                      Modify the visual render output variables directly on the WebGL element wrapper using hardware-accelerated CSS composite matrix:
                    </p>

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-slate-300">
                          <span>HUE ROTATE ({hue}°)</span>
                          <span className="text-indigo-400 font-semibold">
                            {hue === 0 ? 'Original Violet' : hue < 90 ? 'Ethereal Azure' : hue < 180 ? 'Emerald Glare' : hue < 270 ? 'Gold Core' : 'Crimson Flare'}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="360"
                          value={hue}
                          onChange={(e) => setHue(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-slate-300">
                          <span>INTENSITY / BRIGHTNESS ({brightness}%)</span>
                          <span>Contrast Level</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="200"
                          value={brightness}
                          onChange={(e) => setBrightness(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-slate-300">
                          <span>CONTRAST BOOST ({contrast}%)</span>
                          <span>Edge Sharpness</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="200"
                          value={contrast}
                          onChange={(e) => setContrast(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        onClick={() => {
                          setHue(0);
                          setBrightness(100);
                          setContrast(100);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700/80 text-white rounded-lg text-xs font-mono transition-all border border-slate-700/40"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Reset Presets
                      </button>

                      <div className="flex gap-2">
                        <button onClick={() => setHue(180)} className="w-5 h-5 rounded-full bg-emerald-500 border border-white/20" title="Emerald preset" />
                        <button onClick={() => setHue(290)} className="w-5 h-5 rounded-full bg-red-500 border border-white/20" title="Crimson preset" />
                        <button onClick={() => setHue(90)} className="w-5 h-5 rounded-full bg-blue-500 border border-white/20" title="Cyan preset" />
                        <button onClick={() => setHue(40)} className="w-5 h-5 rounded-full bg-amber-500 border border-white/20" title="Golden preset" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'shader' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-indigo-400">fragment-shader.glsl</span>
                      <button
                        onClick={handleCopyCode}
                        className="text-xs text-indigo-300 hover:text-white bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded transition-all hover:bg-indigo-500/20"
                      >
                        {copied ? 'Copied React boilerplate!' : 'Copy React Tag'}
                      </button>
                    </div>

                    <div className="relative bg-slate-950/70 rounded-xl p-4 font-mono text-xs text-slate-400 border border-slate-800/80 h-[260px] overflow-y-auto leading-relaxed">
                      <pre className="text-indigo-200/90 select-all">{shaderCode}</pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Deck Footer */}
              <div className="bg-slate-950/50 px-6 py-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Play className="w-3.5 h-3.5 text-indigo-400" />
                  Live WebGL Context Rendering
                </span>
                <span className="font-mono text-[11px] text-slate-500">
                  Target: Canvas Element
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Feature Cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative">
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Mathematical Elegance</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Synthesized entirely from geometric functions. No texture files or large assets required, ensuring near-instantaneous load times.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Full-Screen Vector Grid</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Integrated coordinate grids scale dynamically with any monitor resolution or aspect ratio without rendering artifacts.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Hardware Accelerated</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Calculates trigonometric transformations directly inside the GPU pipeline, keeping the CPU main thread completely free.
            </p>
          </div>
        </div>

      </div>

      {/* Footer info */}
      <footer className="relative z-10 py-6 border-t border-slate-900/80 bg-slate-950/20 text-center text-xs text-slate-500">
        <p>© 2026 Aetherial Systems. Designed with pure WebGL Shaders.</p>
      </footer>
    </div>
  );
}
