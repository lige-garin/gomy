import { motion } from 'motion/react';
import { Network, Cloud, Briefcase, Cpu } from 'lucide-react';

export default function Partners() {
  const categories = [
    {
      title: "通信运营商生态",
      icon: <Network className="w-6 h-6" />,
      partners: ["中国联通", "中国移动", "中国电信"]
    },
    {
      title: "ICT与基础设施生态",
      icon: <Cpu className="w-6 h-6" />,
      partners: ["华为", "中兴通讯", "新华三", "浪潮信息", "联想", "曙光"]
    },
    {
      title: "云与AI生态",
      icon: <Cloud className="w-6 h-6" />,
      partners: ["阿里云", "火山引擎", "MiniMax", "智谱", "腾讯云", "百度智能云", "京东云"]
    },
    {
      title: "办公与应用生态",
      icon: <Briefcase className="w-6 h-6" />,
      partners: ["钉钉", "飞书", "企业微信", "金山办公"]
    }
  ];

  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-tech-accent)] font-mono text-sm tracking-widest uppercase block mb-4">Ecosystem Partners</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">生态合作</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            公司坚持开放协同、生态共建的发展理念，持续与通信运营商、ICT基础设施厂商、云平台厂商、大模型厂商及行业头部科技企业开展业务协同与生态合作，构建面向未来的产业智能化服务体系。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[var(--color-tech-accent)]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-xl text-[var(--color-tech-accent)] group-hover:bg-[var(--color-tech-accent)]/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.partners.map((partner, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
