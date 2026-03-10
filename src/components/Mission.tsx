import { motion } from 'motion/react';
import { Compass, Eye } from 'lucide-react';

export default function Mission() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#111111]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-10 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-tech-accent)]/10 rounded-full filter blur-[80px] group-hover:bg-[var(--color-tech-accent)]/20 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Compass className="w-7 h-7 text-[var(--color-tech-accent)]" />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-6">企业使命</h3>
              <h4 className="text-xl text-white/90 font-medium mb-6">
                以数字基础设施夯实产业底座，<br />以人工智能驱动行业升级。
              </h4>
              
              <p className="text-gray-400 font-light leading-relaxed">
                公司将持续聚焦数据中心、云与算力、大模型接入与行业应用落地，不断提升交付能力、整合能力与创新能力，推动人工智能从“可用”走向“好用”，从“展示型能力”走向“生产型能力”，让技术真正服务业务增长与产业升级。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-panel p-10 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-tech-accent-secondary)]/10 rounded-full filter blur-[80px] group-hover:bg-[var(--color-tech-accent-secondary)]/20 transition-colors"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Eye className="w-7 h-7 text-[var(--color-tech-accent-secondary)]" />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-6">企业愿景</h3>
              
              <div className="flex-1 flex items-center">
                <h4 className="text-2xl md:text-3xl text-white/90 font-medium leading-relaxed">
                  成为值得客户长期信赖的<br />
                  <span className="text-gradient">数字基础设施与人工智能</span><br />
                  服务伙伴。
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
