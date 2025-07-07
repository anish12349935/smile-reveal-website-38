import { Card, CardContent } from '@/components/ui/card';
import { Award, GraduationCap, Users } from 'lucide-react';
import dentist1 from '@/assets/dentist-1.jpg';
import dentist2 from '@/assets/dentist-2.jpg';
import dentist3 from '@/assets/dentist-3.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Lead Cosmetic Dentist",
    image: dentist1,
    experience: "15+ Years",
    specialties: ["Cosmetic Dentistry", "Smile Makeovers", "Veneers"],
    education: "DDS from Harvard School of Dental Medicine",
    description: "Specializing in transformative cosmetic procedures with a gentle, patient-centered approach."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Oral Surgeon & Implant Specialist",
    image: dentist2,
    experience: "12+ Years",
    specialties: ["Dental Implants", "Oral Surgery", "Bone Grafting"],
    education: "DDS from UCSF, Oral Surgery Residency",
    description: "Expert in complex surgical procedures and dental implant placement with minimally invasive techniques."
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Orthodontist & Family Dentist",
    image: dentist3,
    experience: "10+ Years",
    specialties: ["Orthodontics", "Family Dentistry", "Invisalign"],
    education: "DDS from NYU, Orthodontics Specialty",
    description: "Passionate about creating beautiful smiles for patients of all ages with the latest orthodontic technology."
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-dental-blue-light font-medium">{member.title}</p>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">{member.experience}</span>
          </div>
          
          <div className="flex items-start space-x-3">
            <GraduationCap className="w-5 h-5 text-primary mt-1" />
            <span className="text-sm text-dental-gray">{member.education}</span>
          </div>
          
          <p className="text-dental-gray text-sm leading-relaxed">
            {member.description}
          </p>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dental-blue-light text-primary text-xs font-medium rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-dental-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto">
            Our board-certified specialists combine years of experience with the latest 
            techniques to deliver exceptional dental care tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-dental-gray">Combined Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15k+</div>
                <div className="text-dental-gray">Successful Procedures</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-dental-gray">Patient Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;