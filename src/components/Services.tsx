import { motion } from 'motion/react';
import { Cloud, Brain, Bot, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "云计算与基础架构",
      icon: <Cloud className="w-8 h-8 text-[var(--color-tech-accent)]" />,
      desc: "提供安全可靠、弹性可伸缩的数字底座，支撑企业全面上云与架构现代化。",
      subCategories: [
        {
          name: "计算与网络",
          items: ["云服务器 ECS", "高性能 GPU 云服务器", "轻量应用服务器", "容器服务 ACK", "函数计算 FC", "云解析 DNS", "多云应用与专属云"]
        },
        {
          name: "存储与数据库",
          items: ["云数据库 RDS", "云原生数据库 PolarDB", "对象存储 OSS", "文件存储 NAS", "VikingDB 向量数据库"]
        },
        {
          name: "安全与管理",
          items: ["云防火墙", "数字证书管理 (SSL)", "域名与网站", "无影云电脑", "短信服务"]
        }
      ]
    },
    {
      id: "02",
      title: "大模型与 AI 开发平台",
      icon: <Brain className="w-8 h-8 text-[var(--color-tech-accent-secondary)]" />,
      desc: "汇聚顶尖大模型能力，提供从模型训练、推理到智能体开发的一站式平台。",
      subCategories: [
        {
          name: "基础大模型",
          items: ["豆包大模型系列 (旗舰/Lite/Mini)", "豆包视频/图像生成模型", "豆包语音/声音复刻模型", "豆包编程/角色扮演模型", "千问大模型"]
        },
        {
          name: "AI 开发与服务平台",
          items: ["火山方舟大模型平台", "百炼大模型服务平台", "人工智能平台 PAI", "扣子 (Coze) / AgentKit", "PromptPilot", "机器学习平台"]
        },
        {
          name: "数据与算力套件",
          items: ["AI 云原生训练套件", "AI 云原生推理套件", "大数据开发治理平台 DataWorks", "MaxCompute"]
        }
      ]
    },
    {
      id: "03",
      title: "智能体与 AI 原生应用",
      icon: <Bot className="w-8 h-8 text-[var(--color-tech-accent)]" />,
      desc: "开箱即用的智能体与AI原生应用，全面赋能企业营销、客服、分析等业务场景。",
      subCategories: [
        {
          name: "通用智能体 (Agent)",
          items: ["客服 Agent", "智能分析 Agent", "智能营销 Agent", "创作 Agent", "用户研究 Agent", "联网问答 Agent", "安全运营智能体"]
        },
        {
          name: "AI 应用服务",
          items: ["即梦 AI", "AI 搜索引擎", "AI 知识库解决方案", "Lumi 平台", "AI 云原生沙箱服务", "HiAgent", "TRAE CN"]
        }
      ]
    },
    {
      id: "04",
      title: "行业智能化解决方案",
      icon: <Briefcase className="w-8 h-8 text-[var(--color-tech-accent-secondary)]" />,
      desc: "深入汽车、金融、医疗、大消费等行业场景，提供端到端的数字化与智能化升级方案。",
      subCategories: [
        {
          name: "汽车与出行",
          items: ["智能驾驶云", "智能座舱 AI 推荐", "汽车超级 APP 体验提升", "端云一体 AI 座舱解决方案"]
        },
        {
          name: "金融与医疗",
          items: ["金融机构数字化运营", "金融应用现代化架构", "基因-生物医学研究平台", "AI 医药智能算力"]
        },
        {
          name: "大消费与文娱",
          items: ["数智经营 Agent", "AI 点单&巡质检", "消费者 AR 体验营销", "游戏云端部署", "短剧/教育音视频", "社交互娱"]
        },
        {
          name: "政企与通信",
          items: ["文旅集团数字营销", "新媒体数智化运营", "数智化营销增长", "大屏智能推荐云"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-tech-accent)] font-mono text-sm tracking-widest uppercase block mb-4">Core Business</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">核心业务</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light">
            整合顶尖云计算基础设施、大模型能力与丰富行业经验，为您提供全栈式智能化解决方案。
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel p-8 md:p-10 rounded-3xl hover:border-[var(--color-tech-accent)]/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--color-tech-accent)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                {/* Left side: Title and Desc */}
                <div className="lg:w-1/3 shrink-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-[var(--color-tech-accent)]/10 transition-colors">
                      {service.icon}
                    </div>
                    <span className="font-display text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                {/* Right side: Subcategories and Tags */}
                <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                  {service.subCategories.map((sub, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-white/80 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-tech-accent-secondary)]"></span>
                        {sub.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sub.items.map((item, j) => (
                          <span key={j} className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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
