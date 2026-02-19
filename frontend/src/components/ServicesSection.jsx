import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code2, TestTube, BarChart3, Cloud, Palette } from 'lucide-react';
import { Badge } from './ui/badge';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'End-to-end application development across all platforms',
      features: [
        'Mobile Application Development (iOS, Android, Hybrid)',
        'Cloud-Native Application Development',
        'Enterprise Application Development (ERP, CRM, HRMS)',
        'API & Third-Party Integration',
        'E-commerce Platforms & Portals',
        'Database Design & Development',
      ],
      technologies: ['Java', 'Python', '.NET', 'Node.js', 'PHP', 'React', 'Flutter', 'Angular', 'Vue.js'],
      image: 'https://customer-assets.emergentagent.com/job_drive-color-refresh/artifacts/1camdrwe_Tek1.png',
    },
    {
      icon: TestTube,
      title: 'Software Testing',
      description: 'Comprehensive quality assurance and testing services',
      features: [
        'Functional Testing',
        'Regression Testing',
        'Test Automation',
        'Framework Design & Maintenance',
        'Performance Testing',
        'Load Testing',
      ],
      technologies: ['Selenium', 'Postman', 'JUnit', 'TestNG', 'Cypress', 'Appium'],
      image: 'https://customer-assets.emergentagent.com/job_agent-demo-form/artifacts/ilvi065v_Tek2-removebg-preview.png',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence/Data Analytics',
      description: 'Transform data into actionable insights',
      features: [
        'Business Intelligence Dashboards & Reporting',
        'Data Visualization (JIRA, Power BI, Tableau)',
        'KPI Tracking & Performance Analytics',
        'Operational & Financial Analytics',
        'Real-Time Data Monitoring & Alert Systems',
        'Custom BI Tool Implementation & Optimization',
      ],
      technologies: ['Power BI', 'Tableau', 'Hadoop', 'Spark', 'Pandas', 'NumPy'],
      image: 'https://customer-assets.emergentagent.com/job_agent-demo-form/artifacts/yc1ej00j_Tek3-removebg-preview.png',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Management',
      description: 'Streamline deployment and infrastructure management',
      features: [
        'CI/CD pipeline setup',
        'Containerization (Docker, Kubernetes)',
        'Cloud deployment (AWS, Azure, GCP)',
        'Infrastructure as Code (Terraform, CloudFormation, Ansible)',
        'Cloud Migration & Modernization',
        'Automated Testing & Deployment',
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      image: 'https://customer-assets.emergentagent.com/job_agent-demo-form/artifacts/5nyol30h_Tek4-removebg-preview.png',
    },
    {
      icon: Palette,
      title: 'UI/UX Design Solutions',
      description: 'Create intuitive and engaging user experiences',
      features: [
        'User research & wireframing',
        'Responsive web & mobile design',
        'User journey mapping & usability testing',
        'User Interface Design',
        'Cross-Platform UI Consistency',
        'Design Sprint Facilitation',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Balsamiq'],
      image: 'https://customer-assets.emergentagent.com/job_agent-demo-form/artifacts/hnwfh2xp_Tek5-removebg-preview.png',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Service Portfolio</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions across the digital landscape</p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg p-3">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative h-full min-h-[400px] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto max-h-[350px] object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })};
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;