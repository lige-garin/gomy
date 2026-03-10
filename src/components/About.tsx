import { motion } from 'motion/react';
import { Target, Zap, Shield, Cpu } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-[var(--color-tech-accent)]" />,
      title: "数据中心",
      desc: "夯实产业底座"
    },
    {
      icon: <Zap className="w-6 h-6 text-[var(--color-tech-accent-secondary)]" />,
      title: "云平台",
      desc: "弹性算力支撑"
    },
    {
      icon: <Target className="w-6 h-6 text-[var(--color-tech-accent)]" />,
      title: "大模型",
      desc: "智能能力引擎"
    },
    {
      icon: <Shield className="w-6 h-6 text-[var(--color-tech-accent-secondary)]" />,
      title: "行业应用",
      desc: "赋能真实场景"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-tech-accent)]/30 bg-[var(--color-tech-accent)]/10 text-[var(--color-tech-accent)] text-sm font-medium">
              企业定位
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              数字基础设施与<br />
              人工智能融合服务提供商
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                中通国脉吉林省科技有限公司，依托中通国脉（股票代码：603559）产业体系基础，聚焦数据中心业务、云与算力服务、大模型接入服务、行业智能化解决方案，致力于为政府、运营商、企事业单位及各行业客户提供覆盖基础设施、平台能力与智能应用的一体化服务。
              </p>
              <p>
                我们面向新时代产业智能化升级需求，围绕四大核心方向，打造集咨询规划、资源整合、平台接入、系统部署、场景开发、持续运维于一体的服务体系，推动企业从传统信息化迈向智能化、平台化和数据驱动化发展。
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{feature.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-tech-accent)]/20 to-[var(--color-tech-accent-secondary)]/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://picsum.photos/seed/datacenter/1200/900?blur=2" 
                alt="Data Center and AI" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-20"></div>
              
              {/* Floating Tech Elements */}
              <div className="absolute top-8 right-8 glass-panel p-4 rounded-xl z-30 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                  <span className="text-xs font-mono text-white">System Online</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 glass-panel p-4 rounded-xl z-30">
                <div className="flex flex-col gap-2">
                  <div className="h-1 w-24 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-[var(--color-tech-accent)]"></div>
                  </div>
                  <span className="text-xs font-mono text-gray-300">AI Processing: 85%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
