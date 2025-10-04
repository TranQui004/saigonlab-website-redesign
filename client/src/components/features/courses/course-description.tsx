import { Target, Users, BookOpen, CheckCircle, Star, Clock, Award } from "lucide-react";

interface CourseDescriptionProps {
  description: string;
  isExpanded?: boolean;
  className?: string;
}

export default function CourseDescription({ description, isExpanded = false, className = "" }: CourseDescriptionProps) {
  // If not expanded, show simple truncated text
  if (!isExpanded) {
    return (
      <div className={`course-description ${className}`} data-testid="course-description">
        <p className="text-gray-600 leading-relaxed line-clamp-4">
          {description.replace(/\n/g, ' ')}
        </p>
      </div>
    );
  }

  // Split description into paragraphs and process each one for expanded view
  const paragraphs = description.split('\n\n').filter(p => p.trim());
  
  const processText = (text: string) => {
    // Check for section headers and apply appropriate styling
    if (text.includes('Mục tiêu:') || text.includes('Mục tiêu ') || text.includes('**Mục tiêu:**')) {
      return formatSection(text, 'objective', Target, 'text-blue-600');
    }
    if (text.includes('Lợi ích:') || text.includes('Lợi ích ') || text.includes('**Lợi ích:**') || text.includes('Bạn sẽ học được gì?') || text.includes('**Bạn sẽ học được gì?**')) {
      return formatSection(text, 'benefits', Star, 'text-green-600');
    }
    if (text.includes('Đối tượng:') || text.includes('Đối tượng ') || text.includes('**Đối tượng:**') || text.includes('Khóa học này dành cho ai?') || text.includes('**Khóa học này dành cho ai?**') || text.includes('Đối tượng tham gia:') || text.includes('**Đối tượng tham gia:**')) {
      return formatSection(text, 'target', Users, 'text-purple-600');
    }
    if (text.includes('Nội dung:') || text.includes('Nội dung ') || text.includes('Chương trình:') || text.includes('**Nội dung:**') || text.includes('**Chương trình:**') || text.includes('Nội dung chương trình:') || text.includes('**Nội dung chương trình:**') || text.includes('Nội dung chính:') || text.includes('**Nội dung chính:**')) {
      return formatSection(text, 'content', BookOpen, 'text-orange-600');
    }
    if (text.includes('Bạn sẽ học được:') || text.includes('Kết quả đạt được:') || text.includes('Sau khóa học:') || text.includes('**Kết quả đạt được:**') || text.includes('**Sau khóa học:**') || text.includes('**Bạn sẽ học được:**')) {
      return formatSection(text, 'outcomes', Award, 'text-emerald-600');
    }
    if (text.includes('Yêu cầu:') || text.includes('Điều kiện:') || text.includes('Tiên quyết:') || text.includes('**Yêu cầu:**') || text.includes('**Điều kiện:**')) {
      return formatSection(text, 'requirements', CheckCircle, 'text-red-600');
    }
    if (text.includes('Thời gian:') || text.includes('Lịch học:') || text.includes('Thời khóa biểu:') || text.includes('**Thời gian:**') || text.includes('**Hình thức:**') || text.includes('Hình thức:') || text.includes('Thời lượng:') || text.includes('**Thời lượng:**')) {
      return formatSection(text, 'schedule', Clock, 'text-indigo-600');
    }
    if (text.includes('Cam kết:') || text.includes('**Cam kết:**') || text.includes('Cam kết của SAIGONLAB:') || text.includes('**Cam kết của SAIGONLAB:**')) {
      return formatSection(text, 'commitment', Award, 'text-green-600');
    }
    if (text.includes('Đặc biệt:') || text.includes('**Đặc biệt:**') || text.includes('Dịch vụ đặc biệt:') || text.includes('**Dịch vụ đặc biệt:**')) {
      return formatSpecialSection(text);
    }
    if (text.includes('Về chúng tôi') || text.includes('**Về chúng tôi') || text.includes('SAIGONLAB:') || text.includes('**SAIGONLAB:**')) {
      return formatAboutSection(text);
    }
    
    // Check for level/stage indicators
    if (text.includes('Cấp độ') || text.includes('Level') || text.includes('Giai đoạn') || text.includes('Khóa ') || text.includes('**CẤP ĐỘ') || text.includes('**LEVEL') || text.includes('**GIAI ĐOẠN')) {
      return formatLevel(text);
    }
    
    // Check for challenge/problem sections
    if (text.includes('Thách thức') || text.includes('**Thách thức') || text.includes('Bạn có đang đối mặt') || text.includes('**Bạn có đang đối mặt')) {
      return formatSection(text, 'challenges', Target, 'text-red-600');
    }
    
    // Regular paragraph
    return formatParagraph(text);
  };

  const formatParagraph = (text: string) => {
    // Handle bold text formatting **text**
    const parts = text.split(/\*\*(.*?)\*\*/g);
    
    return (
      <p className="text-gray-600 text-base leading-relaxed mb-3">
        {parts.map((part, index) => {
          // If index is odd, it's the content inside **
          if (index % 2 === 1) {
            return <strong key={index} className="font-bold text-gray-800">{part}</strong>;
          }
          return part;
        })}
      </p>
    );
  };

  const formatSection = (text: string, type: string, IconComponent: any, iconColor: string) => {
    // Handle different separator patterns
    let parts;
    let title;
    let content;
    
    // Check for bold markdown format: **Title:**
    if (text.includes('**') && text.includes(':**')) {
      const match = text.match(/\*\*(.*?):\*\*(.*)/);  
      if (match) {
        title = match[1].trim();
        content = match[2].trim();
      } else {
        // Try regular pattern
        parts = text.split(':');
        if (parts.length < 2) return formatParagraph(text);
        title = parts[0].replace(/\*\*/g, '').trim();
        content = parts.slice(1).join(':').trim();
      }
    } else {
      // Regular pattern with colon
      parts = text.split(':');
      if (parts.length < 2) return formatParagraph(text);
      title = parts[0].trim();
      content = parts.slice(1).join(':').trim();
    }
    
    return (
      <div className="mb-6 bg-gray-50 rounded-lg p-4 border-l-4 border-current" data-testid={`section-${type}`}>
        <div className={`flex items-center gap-2 mb-3 ${iconColor}`}>
          <IconComponent className="w-5 h-5 flex-shrink-0" />
          <span className="font-bold text-base uppercase tracking-wide">{title}</span>
        </div>
        <div className="pl-7">
          {formatContent(content)}
        </div>
      </div>
    );
  };

  const formatSpecialSection = (text: string) => {
    let title, content;
    
    if (text.includes('**Đặc biệt:**')) {
      const match = text.match(/\*\*(Đặc biệt):\*\*(.*)/); // Remove 's' flag
      if (match) {
        title = match[1].trim();
        content = match[2].trim();
      } else {
        const parts = text.split(':');
        title = parts[0].replace(/\*\*/g, '').trim();
        content = parts.slice(1).join(':').trim();
      }
    } else {
      const parts = text.split(':');
      if (parts.length < 2) return formatParagraph(text);
      title = parts[0].replace(/\*\*/g, '').trim();
      content = parts.slice(1).join(':').trim();
    }
    
    return (
      <div className="mb-6 bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500" data-testid="section-special">
        <div className="flex items-center gap-2 mb-3 text-amber-600">
          <Star className="w-5 h-5 flex-shrink-0" />
          <span className="font-bold text-base uppercase tracking-wide">{title}</span>
        </div>
        <div className="pl-7">
          {content && formatContent(content)}
        </div>
      </div>
    );
  };

  const formatAboutSection = (text: string) => {
    let title, content;
    
    if (text.includes('Về chúng tôi')) {
      const parts = text.split(/Về chúng tôi[\s\-]*SAIGONLAB:?/i);
      if (parts.length > 1) {
        title = 'Về chúng tôi - SAIGONLAB';
        content = parts[1].trim();
      } else {
        const match = text.match(/(Về chúng tôi[^:]*):?([\s\S]*)/i);
        if (match) {
          title = match[1].trim();
          content = match[2].trim();
        } else {
          return formatParagraph(text);
        }
      }
    } else {
      return formatParagraph(text);
    }
    
    return (
      <div className="mb-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500" data-testid="section-about">
        <div className="flex items-center gap-2 mb-3 text-blue-600">
          <Award className="w-5 h-5 flex-shrink-0" />
          <span className="font-bold text-base uppercase tracking-wide">{title}</span>
        </div>
        <div className="pl-7">
          {content && formatContent(content)}
        </div>
      </div>
    );
  };

  const formatLevel = (text: string) => {
    // Split by common separators to identify the level title
    const lines = text.split(/(?=Cấp độ|Level|Giai đoạn|Khóa |\*\*CẤP ĐỘ|\*\*LEVEL|\*\*GIAI ĐOẠN)/);
    
    return (
      <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500" data-testid="level-section">
        {lines.map((line, index) => {
          if (line.includes('Cấp độ') || line.includes('Level') || line.includes('Giai đoạn') || line.includes('Khóa ') || line.includes('**CẤP ĐỘ') || line.includes('**LEVEL') || line.includes('**GIAI ĐOẠN')) {
            const [title, ...rest] = line.split(':');
            const cleanTitle = title.replace(/\*\*/g, '').trim();
            return (
              <div key={index} className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-800 text-lg">{cleanTitle}</span>
                </div>
                {rest.length > 0 && (
                  <div className="text-gray-600 text-base pl-7 leading-relaxed">
                    {formatContent(rest.join(':').trim())}
                  </div>
                )}
              </div>
            );
          }
          return line.trim() ? (
            <div key={index} className="text-gray-600 text-base leading-relaxed mb-2 pl-7">
              {formatContent(line.trim())}
            </div>
          ) : null;
        })}
      </div>
    );
  };

  const formatContent = (content: string) => {
    // Check if content has bullet points or numbered lists
    const lines = content.split('\n').map(line => line.trim()).filter(line => line);
    
    // Handle cases where bullet points are on the same line separated by • or mixed content
    const expandedLines = [];
    for (const line of lines) {
      // Check if the line contains bullet points that should be separated
      if (line.includes('•') && !line.startsWith('•')) {
        // Handle cases like "Lãnh đạo: • First item • Second item"
        if (line.includes(': •')) {
          const [header, rest] = line.split(': •', 2);
          expandedLines.push(header + ':');
          if (rest) {
            const bulletItems = rest.split(' •');
            for (const item of bulletItems) {
              if (item.trim()) {
                expandedLines.push('• ' + item.trim());
              }
            }
          }
        }
        // Handle cases like "First item • Second item • Third item"
        else {
          const parts = line.split('•').filter(part => part.trim());
          for (let i = 0; i < parts.length; i++) {
            if (i === 0 && !parts[i].trim().endsWith(':')) {
              expandedLines.push(parts[i].trim());
            } else {
              expandedLines.push('• ' + parts[i].trim());
            }
          }
        }
      } else {
        expandedLines.push(line);
      }
    }
    
    const hasBullets = expandedLines.some(line => 
      line.startsWith('•') || 
      line.startsWith('-') || 
      line.startsWith('*') ||
      line.startsWith('+') ||
      line.startsWith('→') ||
      line.startsWith('✓') ||
      /^\d+\./.test(line) ||
      /^[a-zA-Z]\)/.test(line)
    );
    
    if (hasBullets) {
      return (
        <div className="space-y-2">
          {expandedLines.map((line, index) => {
            // Skip empty lines
            if (!line.trim()) return null;
            
            // Check if this line is a bullet point
            const isBulletPoint = line.startsWith('•') || 
              line.startsWith('-') || 
              line.startsWith('*') ||
              line.startsWith('+') ||
              line.startsWith('→') ||
              line.startsWith('✓') ||
              /^\d+\./.test(line) ||
              /^[a-zA-Z]\)/.test(line);
            
            if (isBulletPoint) {
              // Remove bullet point markers
              const cleanLine = line
                .replace(/^[•\-*+→✓]\s*/, '')
                .replace(/^\d+\.\s*/, '')
                .replace(/^[a-zA-Z]\)\s*/, '');
              return (
                <div key={index} className="flex items-start gap-2 ml-4">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-base leading-relaxed">
                    {formatTextWithBold(cleanLine)}
                  </span>
                </div>
              );
            } else {
              // Check if it's a section header
              const isHeader = line.endsWith(':') || 
                               /^[A-ZÀ-ỹ][a-zà-ỹ\s]+:$/.test(line) ||
                               /^[A-ZÀ-ỹ][A-ZÀ-ỹ\s]+:$/.test(line);
              
              if (isHeader) {
                return (
                  <h4 key={index} className="font-bold text-gray-800 text-lg mt-4 mb-2">
                    {formatTextWithBold(line)}
                  </h4>
                );
              } else {
                return (
                  <p key={index} className="text-gray-600 text-base leading-relaxed mb-2">
                    {formatTextWithBold(line)}
                  </p>
                );
              }
            }
          })}
        </div>
      );
    }
    
    // Regular content with multiple lines
    return (
      <div className="space-y-2">
        {expandedLines.map((line, index) => (
          <p key={index} className="text-gray-600 text-base leading-relaxed">
            {formatTextWithBold(line)}
          </p>
        ))}
      </div>
    );
  };
  
  const formatTextWithBold = (text: string) => {
    // Handle bold text formatting **text**
    const parts = text.split(/\*\*(.*?)\*\*/g);
    
    return (
      <>
        {parts.map((part, index) => {
          // If index is odd, it's the content inside **
          if (index % 2 === 1) {
            return <strong key={index} className="font-bold text-gray-800">{part}</strong>;
          }
          return part;
        })}
      </>
    );
  };

  return (
    <div className={`course-description ${className}`} data-testid="course-description">
      <div className={`space-y-3 ${!isExpanded ? 'line-clamp-6' : ''}`}>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            {processText(paragraph)}
          </div>
        ))}
      </div>
    </div>
  );
}