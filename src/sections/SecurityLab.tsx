import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, Radio, Terminal, Cpu, CheckCircle, 
  AlertTriangle, Lock, Eye, Zap, RefreshCw, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const initialLogs = [
  { id: '1', time: '02:21:49', type: 'INFO', msg: 'Kafka ingestion pipeline active: 14,250 events/sec normalized.', source: 'LOG_COLLECTOR' },
  { id: '2', time: '02:21:48', type: 'WARN', msg: 'JA4 Bot Fingerprint match: TLS ClientHello anomaly detected.', source: 'WAF_ENGINE' },
  { id: '3', time: '02:21:45', type: 'ALERT', msg: 'Isolation Forest trigger: Volumetric flood attempt tagged [T1499].', source: 'DETECTION_ENGINE' },
  { id: '4', time: '02:21:40', type: 'ACTION', msg: 'Automated mitigation: Rate limit applied & IP quarantined.', source: 'CIRCUIT_BREAKER' },
  { id: '5', time: '02:21:35', type: 'INFO', msg: 'Cloud IAM RBAC audit completed: 0 privilege escalation findings.', source: 'CLOUD_SECURITY' }
];

export const SecurityLab: React.FC = () => {
  const { detectionPipeline } = PORTFOLIO_DATA;
  const [logs, setLogs] = useState(initialLogs);
  const [threatLevel, setThreatLevel] = useState<'MONITORING' | 'MITIGATING'>('MONITORING');
  const [selectedStep, setSelectedStep] = useState<number>(3); // Detection step selected by default

  // Simulate incoming live telemetry stream
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const sources = ['WAF_GATEWAY', 'SIEM_SPLUNK', 'ISOLATION_FOREST', 'CLOUD_TRAIL', 'DNS_GUARD'];
      const msgs = [
        'JWT Auth signature validated. Scope: [read:telemetry].',
        'Nmap SYN port scan detected on subnet 192.168.1.0/24.',
        'GraphQL depth analyzer flagged query depth > 12.',
        'Snort IDS rule matched: Potential SQLi payload payload block.',
        'KMS AES-256 GCM key rotation executed cleanly.'
      ];
      const types = ['INFO', 'INFO', 'WARN', 'ALERT', 'INFO'];
      const rIdx = Math.floor(Math.random() * msgs.length);

      const newLog = {
        id: Date.now().toString(),
        time: timeStr,
        type: types[rIdx],
        msg: msgs[rIdx],
        source: sources[rIdx]
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="security" className="py-20 relative z-10 border-t border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ SOC COMMAND CENTER"
          title="SECURITY"
          highlightedTitle="ENGINEERING"
          subtitle="Threat detection pipelines, network traffic inspection, SIEM log analysis, cloud governance, and real-time defense architectures."
        />

        {/* SOC Dashboard Frame Header */}
        <div className="mb-8 p-4 rounded-2xl glass-panel border border-purple-500/30 bg-[#0A0F18]/90 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              TELEMETRY & DETECTION LAB
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-purple-900/40 border border-purple-500/30 text-purple-300">
              SIMULATION MODE
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-white/70">
            <div>STATUS: <strong className="text-emerald-400">ONLINE</strong></div>
            <div>THREAT LEVEL: <strong className="text-cyan-400">{threatLevel}</strong></div>
            <div>SIEM: <strong className="text-purple-300">SPLUNK & KAFKA</strong></div>
          </div>
        </div>

        {/* 1. Detection Pipeline Flow */}
        <div className="mb-12">
          <h3 className="text-sm font-mono font-bold text-cyan-400 mb-4 tracking-wider uppercase flex items-center gap-2">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            // END-TO-END DETECTION & RESPONSE PIPELINE
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {detectionPipeline.map((item, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-3 rounded-xl text-left font-mono transition-all border ${
                    isSelected
                      ? 'bg-purple-950/80 border-cyan-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                      : 'bg-white/5 border-white/10 hover:border-purple-500/40 text-white/70'
                  }`}
                >
                  <div className="text-[10px] text-cyan-400 font-bold mb-1">
                    [{item.step}]
                  </div>
                  <div className="text-xs font-bold truncate text-white">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-white/40 mt-1 line-clamp-2">
                    {item.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Telemetry Log Stream & MITRE Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Simulated Event Terminal Stream */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-white/10 bg-black/80 p-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Terminal className="w-4 h-4" />
                <span>LIVE EVENT LOG STREAM</span>
              </div>
              <span className="text-[10px] text-white/40">SIMULATED REAL-TIME</span>
            </div>

            {/* Stream List */}
            <div className="space-y-3 font-mono">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start justify-between gap-3 animate-fadeIn"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-white/40 text-[11px]">{log.time}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            log.type === 'ALERT'
                              ? 'bg-red-950 text-red-400 border border-red-500/30'
                              : log.type === 'WARN'
                              ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                              : log.type === 'ACTION'
                              ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30'
                              : 'bg-purple-950 text-purple-300 border border-purple-500/30'
                          }`}
                        >
                          {log.type}
                        </span>
                        <span className="text-[10px] text-cyan-400 font-semibold">
                          [{log.source}]
                        </span>
                      </div>
                      <p className="text-white/90 text-xs">{log.msg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
              <span>INGESTION: FASTAPI / KAFKA STREAM</span>
              <span className="text-emerald-400">NO DROPPED PACKETS</span>
            </div>
          </div>

          {/* Right Column: MITRE ATT&CK & Defense Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* MITRE ATT&CK Quick Matrix Card */}
            <div className="rounded-2xl glass-panel border border-white/10 bg-[#0F1724]/80 p-5">
              <h4 className="text-xs font-mono font-bold text-purple-300 mb-3 uppercase flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                // MITRE ATT&CK COVERAGE MATRIX
              </h4>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[10px] text-cyan-400 font-bold">T1059</div>
                  <div className="text-white/90 font-medium">Command Execution</div>
                  <div className="text-[9px] text-emerald-400 mt-1">✓ WAF Rules Active</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[10px] text-pink-400 font-bold">T1499</div>
                  <div className="text-white/90 font-medium">Endpoint Volumetric DoS</div>
                  <div className="text-[9px] text-emerald-400 mt-1">✓ Isolation Forest</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[10px] text-purple-400 font-bold">T1071</div>
                  <div className="text-white/90 font-medium">App Layer Protocol</div>
                  <div className="text-[9px] text-emerald-400 mt-1">✓ JA4 Fingerprinting</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[10px] text-amber-400 font-bold">T1566</div>
                  <div className="text-white/90 font-medium">Phishing & Email Attack</div>
                  <div className="text-[9px] text-emerald-400 mt-1">✓ Header Triage</div>
                </div>
              </div>
            </div>

            {/* Cloud & Network Security Quick Card */}
            <div className="rounded-2xl glass-panel border border-white/10 bg-[#0F1724]/80 p-5">
              <h4 className="text-xs font-mono font-bold text-cyan-400 mb-3 uppercase flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400" />
                // ZERO TRUST & CLOUD SECURITY POSTURE
              </h4>
              <div className="space-y-2 text-xs font-sans text-white/80">
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span>Principle of Least Privilege (PoLP)</span>
                  <span className="font-mono text-emerald-400 font-bold text-[10px]">ENFORCED</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span>Data Encryption (AES-256 & TLS 1.3)</span>
                  <span className="font-mono text-emerald-400 font-bold text-[10px]">ENCRYPTED</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span>Network Traffic Inspection (Wireshark/Nmap)</span>
                  <span className="font-mono text-purple-300 font-bold text-[10px]">ACTIVE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
