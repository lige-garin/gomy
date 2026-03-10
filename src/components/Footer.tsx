import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-tech-accent)]/5 to-transparent mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-xl tracking-tight text-white">中通国脉吉林省科技有限公司</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8">
              依托中通国脉（股票代码：603559）产业体系基础，聚焦数据中心业务、云与算力服务、大模型接入服务、行业智能化解决方案，致力于为政府、运营商、企事业单位及各行业客户提供覆盖基础设施、平台能力与智能应用的一体化服务。
            </p>
            <div className="flex items-center gap-6">
              <div className="p-2 bg-white rounded-lg inline-block">
                {/* 请在左侧文件管理器的 public 文件夹中上传您的二维码图片，并命名为 qrcode.png */}
                <img src="/qrcode.png" alt="WeChat QR Code" className="w-24 h-24 object-cover" onError={(e) => { e.currentTarget.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.ztgm-jl.com'; }} />
              </div>
              <div className="text-sm text-gray-400">
                <p className="mb-1 text-white font-medium">扫码添加微信</p>
                <p>获取专属智能化解决方案</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-display font-semibold mb-6">快速链接</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-[var(--color-tech-accent)] transition-colors">首页</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[var(--color-tech-accent)] transition-colors">企业定位</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[var(--color-tech-accent)] transition-colors">核心业务</a></li>
              <li><a href="#coverage" className="text-gray-400 hover:text-[var(--color-tech-accent)] transition-colors">业务覆盖</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-[var(--color-tech-accent)] transition-colors">生态合作</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-white font-display font-semibold mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[var(--color-tech-accent)] shrink-0 mt-0.5" />
                <span>中国.长春</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[var(--color-tech-accent)] shrink-0" />
                <span>+86 17790014436</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[var(--color-tech-accent)] shrink-0" />
                <span>lglc930@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>&copy; {new Date().getFullYear()} 中通国脉吉林省科技有限公司. 保留所有权利.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
