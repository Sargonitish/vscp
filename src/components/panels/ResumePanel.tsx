'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function ResumePanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-8">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <span className="text-red">➜</span>
        <span>~/portfolio/resume.pdf</span>
      </div>

      <div className="flex flex-col items-center justify-center py-12">
        <div className="relative mb-8">
          <div className="w-32 h-40 rounded border-2 border-border-primary bg-bg-secondary flex items-center justify-center">
            <FileText className="h-16 w-16 text-accent" />
          </div>
          <div className="absolute -top-1 -right-1">
            <span className="flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green" />
            </span>
          </div>
        </div>

        <h1 className="text-xl font-bold text-text-primary mb-2">Resume</h1>
        <p className="text-sm text-text-secondary text-center mb-6 max-w-md">
          Download my resume to learn more about my experience, skills, and qualifications.
        </p>

        <div className="flex gap-3">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            View Online
          </Button>
        </div>

        {/* Quick Preview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-2xl">
          {[
            { value: '5+', label: 'Years Exp.' },
            { value: '15+', label: 'Clients' },
            { value: '50+', label: 'Projects' },
            { value: '3', label: 'Certifications' },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="text-center py-4">
                <div className="text-xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
