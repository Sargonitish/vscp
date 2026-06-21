'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { socialLinks } from '@/data/social';
import { AUTHOR_EMAIL, AUTHOR_LOCATION } from '@/lib/constants';
import { Send, Mail, MapPin, GitFork, Globe, X, Play, type LucideIcon } from 'lucide-react';
import { toast } from 'sonner';

const socialIconMap: Record<string, LucideIcon> = {
  GitFork,
  Globe,
  X,
  Mail,
  Play,
};

export default function ContactPanel() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1000));
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-green">➜</span>
        <span>~/portfolio/contact.tsx</span>
      </div>

      <h1 className="text-2xl font-bold text-text-primary mb-2">Contact</h1>
      <p className="text-sm text-text-secondary mb-6">
        Get in touch! I&apos;m always open to new opportunities, collaborations, and interesting conversations.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-4 rounded border border-border-primary bg-bg-secondary"
        >
          <h2 className="text-sm font-semibold text-text-primary mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs text-text-muted mb-1">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
                aria-label="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                aria-label="Your email"
              />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                required
                rows={4}
                className="w-full rounded border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-primary placeholder:text-text-muted resize-none focus-visible:outline-none focus-visible:border-accent"
                aria-label="Your message"
              />
            </div>
            <Button type="submit" className="w-full gap-2" disabled={sending}>
              <Send className="h-4 w-4" />
              {sending ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {/* Quick Info */}
          <div className="p-4 rounded border border-border-primary bg-bg-secondary">
            <h2 className="text-sm font-semibold text-text-primary mb-3">Quick Info</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <a href={`mailto:${AUTHOR_EMAIL}`} className="hover:text-accent transition-colors">
                  {AUTHOR_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span>{AUTHOR_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <Badge variant="success" className="text-[10px]">
                  <span className="relative flex h-2 w-2 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                  </span>
                  Available for hire
                </Badge>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 rounded border border-border-primary bg-bg-secondary">
            <h2 className="text-sm font-semibold text-text-primary mb-3">Social Links</h2>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon] || Globe;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded text-xs text-text-secondary hover:bg-bg-hover hover:text-accent transition-colors"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{link.username}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
