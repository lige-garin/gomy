import { motion } from 'motion/react';
import { Layers, Database, Cpu, LayoutGrid, CheckCircle2 } from 'lucide-react';

export default function Coverage() {
  const layers = [
    {
      title: "基础设施层",
      icon: <Database className="w-6 h-6" />,
      items: ["数据中心", "机房升级", "IDC资源", "专线网络", "云网协同", "安全体系", "运维保障"],
      color: "from-blue-500/20 to-blue-900/20",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400"
    },
    {
      title: "模型能力层",
      icon: <Cpu className="w-6 h-6" />,
      items: ["文本生成", "图像生成", "视频生成", "视觉理解", "语音识别", "实时交互", "多模态向量化", "模型推理", "模型精调", "模型评测"],
      color: "from-purple-500/20 to-purple-900/20",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      title: "平台能力层",
      icon: <Layers className="w-6 h-6" />,
      items: ["模型接入平台", "知识库平台", "智能体开发平台", "应用集成平台", "数据处理与治理平台"],
      color: "from-emerald-500/20 to-emerald-900/20",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400"
    },
    {
      title: "应用场景层",
      icon: <LayoutGrid className="w-6 h-6" />,
      items: ["智能客服", "知识问答", "文档理解", "营销内容生成", "数据洞察", "企业知识助手", "业务流程协同", "行业数字员工"],
      color: "from-orange-500/20 to-orange-900/20",
      borderColor: "border-orange-500/30",
      textColor: "text-orange-400"
    },
    {
      title: "交付服务层",
      icon: <CheckCircle2 className="w-6 h-6" />,
      items: ["咨询规划", "方案设计", "系统实施", "平台接入", "培训赋能", "运维服务", "持续优化"],
      color: "from-pink-500/20 to-pink-900/20",
      borderColor: "border-pink-500/30",
      textColor: "text-pink-400"
    }
  ];

  return (
    <section id="coverage" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#111111] to-[#050505]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-tech-accent-secondary)] font-mono text-sm tracking-widest uppercase block mb-4">Business Coverage</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">业务覆盖范围</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            公司业务覆盖从基础设施到智能应用的完整链路，构建全方位智能化服务体系。
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`glass-panel p-6 md:p-8 rounded-2xl border-l-4 ${layer.borderColor} bg-gradient-to-r ${layer.color} hover:shadow-lg transition-all`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className={`flex items-center gap-3 w-full md:w-64 shrink-0 ${layer.textColor}`}>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {layer.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold">{layer.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 flex-1">
                  {layer.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-sm font-medium text-gray-200 bg-black/40 border border-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
