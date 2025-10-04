// server/index.ts
import express2 from "express";

// server/routes/api.ts
import { createServer } from "http";

// server/data/storage.ts
import { randomUUID } from "crypto";

// server/data/courses.data.ts
var coursesData = [
  {
    id: "dao-tao-an-toan-thong-tin-cong-an",
    title: "KH\xD3A \u0110\xC0O T\u1EA0O AN TO\xC0N TH\xD4NG TIN TH\u1EF0C CHI\u1EBEN CHO L\u1EF0C L\u01AF\u1EE2NG C\xD4NG AN",
    duration: "2 C\u1EA4P \u0110\u1ED8 - 2 NG\xC0Y \u0110\u1EBEN 5 BU\u1ED4I",
    description: "Gi\u1EDBi thi\u1EC7u chung\n\nTrong b\u1ED1i c\u1EA3nh t\u1ED9i ph\u1EA1m m\u1EA1ng ng\xE0y c\xE0ng tinh vi, vi\u1EC7c nh\u1EADn th\u1EE9c v\xE0 \u1EE9ng ph\xF3 v\u1EDBi r\u1EE7i ro an to\xE0n th\xF4ng tin kh\xF4ng ch\u1EC9 l\xE0 nhi\u1EC7m v\u1EE5 c\u1EE7a b\u1ED9 ph\u1EADn k\u1EF9 thu\u1EADt m\xE0 c\u1EA7n s\u1EF1 ch\u1EE7 \u0111\u1ED9ng t\u1EEB m\u1ECDi c\xE1n b\u1ED9, chi\u1EBFn s\u0129 c\xF4ng an. SAIGONLAB x\xE2y d\u1EF1ng ch\u01B0\u01A1ng tr\xECnh 2 c\u1EA5p \u0111\u1ED9 nh\u1EB1m \u0111\xE1p \u1EE9ng \u0111\xFAng nhu c\u1EA7u t\u1EEBng nh\xF3m \u0111\u1ED1i t\u01B0\u1EE3ng.\n\nC\u1EA5p \u0111\u1ED9 1: C\u01A1 b\u1EA3n - Nh\u1EADn Th\u1EE9c & \u1EE8ng Ph\xF3 An To\xE0n Th\xF4ng Tin Th\u1EF1c Chi\u1EBFn\n\n\u0110\u1ED1i t\u01B0\u1EE3ng: C\xE1n b\u1ED9 c\xF4ng an ph\u01B0\u1EDDng/x\xE3, c\xE1n b\u1ED9 h\xE0nh ch\xEDnh s\u1EED d\u1EE5ng m\xE1y t\xEDnh \u2013 \u0111i\u1EC7n tho\u1EA1i nh\u01B0ng kh\xF4ng chuy\xEAn v\u1EC1 CNTT\nTh\u1EDDi l\u01B0\u1EE3ng: 02 ng\xE0y (3 bu\u1ED5i \u2013 09 gi\u1EDD)\nS\u0129 s\u1ED1 ti\xEAu chu\u1EA9n: 40 h\u1ECDc vi\xEAn/l\u1EDBp\nH\xECnh th\u1EE9c: \u0110\xE0o t\u1EA1o t\u1EADp trung, c\xF3 th\u1EF1c h\xE0nh\n\nN\u1ED9i dung ch\xEDnh:\n\u2022 Nh\u1EADn di\u1EC7n r\u1EE7i ro an to\xE0n th\xF4ng tin trong th\u1EF1c t\u1EBF\n\u2022 K\u1EF9 n\u0103ng th\u1EF1c chi\u1EBFn c\u01A1 b\u1EA3n \u0111\u1EC3 ki\u1EC3m tra & x\u1EED l\xFD\n\u2022 Quy t\u1EAFc b\u1EA3o m\u1EADt c\xE1 nh\xE2n v\xE0 x\u1EED l\xFD s\u1EF1 c\u1ED1\n\nC\u1EA5p \u0111\u1ED9 2: N\xE2ng cao - \u1EE8ng D\u1EE5ng & Ph\u1EA3n \u1EE8ng S\u1EF1 C\u1ED1 An To\xE0n Th\xF4ng Tin Th\u1EF1c Chi\u1EBFn\n\n\u0110\u1ED1i t\u01B0\u1EE3ng: C\xE1n b\u1ED9 k\u1EF9 thu\u1EADt, \u0111i\u1EC1u tra, c\xE1n b\u1ED9 c\xF4ng an ban chuy\xEAn \xE1n c\xF3 n\u1EC1n t\u1EA3ng v\u1EC1 ATTT\nTh\u1EDDi l\u01B0\u1EE3ng: 05 bu\u1ED5i (m\u1ED7i bu\u1ED5i 03 gi\u1EDD)\nS\u0129 s\u1ED1 ti\xEAu chu\u1EA9n: 50 h\u1ECDc vi\xEAn/l\u1EDBp\nH\xECnh th\u1EE9c: \u0110\xE0o t\u1EA1o t\u1EADp trung, c\xF3 th\u1EF1c h\xE0nh\n\nN\u1ED9i dung ch\xEDnh:\n\u2022 C\u1EADp nh\u1EADt nguy c\u01A1 v\xE0 t\u1EA5n c\xF4ng m\u1EDBi trong ng\xE0nh C\xF4ng An\n\u2022 \u1EE8ng ph\xF3 s\u1EF1 c\u1ED1 ATTT th\u1EF1c chi\u1EBFn (Quy tr\xECnh 5 b\u01B0\u1EDBc: ph\xE1t hi\u1EC7n \u2013 c\xF4 l\u1EADp \u2013 ghi nh\u1EADn \u2013 b\xE1o c\xE1o \u2013 ph\u1EE5c h\u1ED3i)\n\u2022 B\u1EA3o m\u1EADt thi\u1EBFt b\u1ECB v\xE0 t\xE0i kho\u1EA3n nghi\u1EC7p v\u1EE5 (C\u1EA5u h\xECnh, qu\u1EA3n l\xFD m\u1EADt kh\u1EA9u, MFA, ph\xE1t hi\u1EC7n \u1EE9ng d\u1EE5ng ng\u1EA7m)\n\u2022 Th\u1EF1c h\xE0nh t\xECnh hu\u1ED1ng m\xF4 ph\u1ECFng\n\u2022 Gi\xE1m s\xE1t v\xE0 c\u1EA3nh b\xE1o s\u1EF1 c\u1ED1 c\u01A1 b\u1EA3n (C\xF4ng c\u1EE5 gi\xE1m s\xE1t, firewall, c\u1EA3nh b\xE1o USB l\u1EA1)\n\nV\u1EC1 ch\xFAng t\xF4i - SAIGONLAB:\n\u2022 500+ doanh nghi\u1EC7p \u0111\xE3 h\u1EE3p t\xE1c\n\u2022 1.000+ d\u1EF1 \xE1n tri\u1EC3n khai tr\xEAn to\xE0n qu\u1ED1c\n\u2022 300+ kh\xF3a h\u1ECDc \u0111\xE3 tri\u1EC3n khai\n\u2022 50.000+ h\u1ECDc vi\xEAn \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/1-LrRudrUpdRpWf22gzbViRtkwXXMwGbu/view?usp=sharing"
  },
  {
    id: "dao-tao-ky-thuat-phat-trien-khach-hang",
    title: "\u0110\xC0O T\u1EA0O K\u1EF8 THU\u1EACT CHUY\xCAN M\xD4N PH\xC1T TRI\u1EC2N KH\xC1CH H\xC0NG DOANH NGHI\u1EC6P",
    duration: "2 C\u1EA4P \u0110\u1ED8 - 4 BU\u1ED4I",
    description: "L\u1ED9 tr\xECnh 2 c\u1EA5p \u0111\u1ED9 n\xE2ng t\u1EA7m k\u1EF9 thu\u1EADt doanh nghi\u1EC7p\n\nDoanh nghi\u1EC7p c\u1EE7a b\u1EA1n c\xF3 \u0111ang \u0111\u1ED1i m\u1EB7t v\u1EDBi c\xE1c v\u1EA5n \u0111\u1EC1 nh\u01B0 h\u1EA1 t\u1EA7ng m\u1EA1ng thi\u1EBFu \u1ED5n \u0111\u1ECBnh, h\u1EC7 th\u1ED1ng IPTV r\u1EDDi r\u1EA1c, hay m\u1EA5t an to\xE0n d\u1EEF li\u1EC7u? SaigonLab c\xF3 gi\u1EA3i ph\xE1p cho b\u1EA1n!\n\n\u0110\u1EB7c bi\u1EC7t: SAIGONLAB nh\u1EADn t\u01B0 v\u1EA5n, thi\u1EBFt k\u1EBF, v\xE0 t\xF9y ch\u1EC9nh kh\xF3a h\u1ECDc theo y\xEAu c\u1EA7u c\u1EE7a \u0111\u01A1n v\u1ECB.\n\nKh\xF3a C\u01A1 B\u1EA3n (2 bu\u1ED5i): N\u1EC1n T\u1EA3ng V\u1EEFng Ch\u1EAFc \u2013 D\u1EC5 D\xE0ng Tri\u1EC3n Khai\n\nN\u1ED9i dung:\n\u2022 Ki\u1EBFn tr\xFAc m\u1EA1ng 3 l\u1EDBp (Core - Distribution - Access)\n\u2022 Thi\u1EBFt b\u1ECB m\u1EA1ng: Switch, Router, Firewall\n\u2022 C\u1EA5u h\xECnh VLAN, DHCP, DNS\n\u2022 Qu\u1EA3n l\xFD WiFi n\u1ED9i b\u1ED9 c\u01A1 b\u1EA3n\n\u2022 T\u1ED5ng quan h\u1EC7 th\u1ED1ng IPTV trong doanh nghi\u1EC7p\n\nKh\xF3a Chuy\xEAn S\xE2u (2 bu\u1ED5i): K\u1EF9 N\u0103ng N\xE2ng Cao \u2013 Gi\u1EA3i Ph\xE1p Chuy\xEAn Bi\u1EC7t\n\nN\u1ED9i dung:\n\u2022 Thi\u1EBFt k\u1EBF c\xE1p m\u1EA1ng UTP/FO, c\u1EA5u h\xECnh VLAN n\xE2ng cao\n\u2022 Gi\u1EA3i ph\xE1p b\u1EA3o m\u1EADt: Firewall, VPN, NAC (802.1X)\n\u2022 Qu\u1EA3n l\xFD WiFi chuy\xEAn d\u1EE5ng (WiFi 5/6/7, roaming, SSID)\n\u2022 L\xE0m ch\u1EE7 c\xF4ng ngh\u1EC7 IPTV v\xE0 t\xEDch h\u1EE3p v\u1EDBi h\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD (PMS)\n\n\u0110\u1ED1i t\u01B0\u1EE3ng tham gia:\n\u2022 C\xE1n b\u1ED9 k\u1EF9 thu\u1EADt doanh nghi\u1EC7p\n\u2022 Tr\u01B0\u1EDFng/ph\xF3 ph\xF2ng IT \u2013 k\u1EF9 thu\u1EADt\n\u2022 \u0110\u01A1n v\u1ECB v\u1EADn h\xE0nh h\u1EA1 t\u1EA7ng m\u1EA1ng (kh\xE1ch s\u1EA1n, resort, t\xF2a nh\xE0)\n\u2022 Ng\u01B0\u1EDDi mu\u1ED1n n\xE2ng cao chuy\xEAn m\xF4n sau kh\xF3a c\u01A1 b\u1EA3n\n\nCam k\u1EBFt c\u1EE7a SAIGONLAB:\n\u2022 Gi\u1EA3ng vi\xEAn 25+ n\u0103m kinh nghi\u1EC7m\n\u2022 H\u1ECDc qua m\xF4 ph\u1ECFng, th\u1EF1c h\xE0nh, t\xECnh hu\u1ED1ng th\u1EF1c ti\u1EC5n\n\u2022 Cung c\u1EA5p t\xE0i li\u1EC7u, s\u01A1 \u0111\u1ED3, case study v\xE0 thi\u1EBFt b\u1ECB th\u1EF1c h\xE0nh\n\u2022 C\u1EA5p ch\u1EE9ng nh\u1EADn sau khi ho\xE0n th\xE0nh",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/17qOG0JeqaQmLiZ580eHfisq9nQjzonLN/view?usp=sharing"
  },
  {
    id: "dao-tao-ung-dung-ai-chuyen-sau",
    title: "\u0110\xC0O T\u1EA0O \u1EE8NG D\u1EE4NG AI CHUY\xCAN S\xC2U",
    duration: "14 BU\u1ED4I - 4 GI\u1EDC/BU\u1ED4I",
    description: "Khai ph\xE1 s\u1EE9c m\u1EA1nh th\u1EF1c s\u1EF1 c\u1EE7a AI\n\nH\xECnh th\u1EE9c: Tr\u1EF1c tuy\u1EBFn (Online)\nGi\u1EA3ng vi\xEAn: PGS, TS. Hong-Linh Truong\nTr\xECnh \u0111\u1ED9: 3 c\u1EA5p \u0111\u1ED9 t\u1EEB C\u01A1 b\u1EA3n \u0111\u1EBFn N\xE2ng cao\n\nM\u1EE5c ti\xEAu:\n\u2022 Trang b\u1ECB t\u01B0 duy \u1EE9ng d\u1EE5ng AI chi\u1EBFn l\u01B0\u1EE3c\n\u2022 H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng th\xE0nh th\u1EA1o c\xE1c c\xF4ng c\u1EE5 AI m\u1EDBi nh\u1EA5t\n\u2022 X\xE2y d\u1EF1ng n\u0103ng l\u1EF1c tri\u1EC3n khai h\u1EC7 th\u1ED1ng AI chuy\xEAn s\xE2u\n\n\u0110\u1EB7c bi\u1EC7t: SAIGONLAB nh\u1EADn t\u01B0 v\u1EA5n, thi\u1EBFt k\u1EBF, v\xE0 t\xF9y ch\u1EC9nh kh\xF3a h\u1ECDc theo y\xEAu c\u1EA7u c\u1EE7a \u0111\u01A1n v\u1ECB.\n\nN\u1ED9i dung 3 kh\xF3a h\u1ECDc (14 bu\u1ED5i, 4 gi\u1EDD/bu\u1ED5i):\n\nLevel 1: AI in General (3 bu\u1ED5i)\n\u2022 AI cho doanh nghi\u1EC7p/khu v\u1EF1c c\xF4ng\n\u2022 Chuy\u1EC3n \u0111\u1ED5i s\u1ED1 v\u1EDBi AI v\xE0 r\u1EE7i ro\n\u2022 Qu\u1EA3n l\xFD v\xF2ng \u0111\u1EDDi h\u1EC7 th\u1ED1ng AI/ML\n\u2022 LLM, AI Agents cho Doanh nghi\u1EC7p/Khu v\u1EF1c c\xF4ng\n\nLevel 2: AI Engineering (4 bu\u1ED5i)\n\u2022 M\xF4 h\xECnh d\u1ECBch v\u1EE5 AI v\xE0 t\xEDch h\u1EE3p\n\u2022 Tri\u1EC3n khai v\xE0 ph\u1EE5c v\u1EE5 d\u1ECBch v\u1EE5 AI/ML\n\u2022 X\xE2y d\u1EF1ng quy tr\xECnh l\xE0m vi\u1EC7c GenAI/LLM\n\u2022 MLOps and Experiment\n\nLevel 3: AI Advanced (6 bu\u1ED5i)\n\u2022 Data Processing Pipelines for AI\n\u2022 Data Lakehouses for AI services\n\u2022 GenAI/LLM Evaluation, Observability and Guards\n\u2022 Building AI Agents/Agentic AI Systems\n\n\u0110\u1ED1i t\u01B0\u1EE3ng tham gia:\n\u2022 CEO, Gi\xE1m \u0111\u1ED1c, Tr\u01B0\u1EDFng ph\xF2ng\n\u2022 C\xE1n b\u1ED9 qu\u1EA3n l\xFD CNTT\n\u2022 K\u1EF9 s\u01B0 ph\u1EA7n m\u1EC1m, k\u1EF9 s\u01B0 d\u1EEF li\u1EC7u (Data Engineer, MLOps Engineer)\n\nCam k\u1EBFt c\u1EE7a SAIGONLAB:\n\u2022 Gi\u1EA3ng vi\xEAn 20+ n\u0103m kinh nghi\u1EC7m\n\u2022 Th\u1EF1c h\xE0nh s\xE1t v\u1EDBi b\u1ED1i c\u1EA3nh doanh nghi\u1EC7p v\xE0 khu v\u1EF1c c\xF4ng\n\u2022 H\u1ED7 tr\u1EE3 k\u1EF9 thu\u1EADt - h\u1ECDc thu\u1EADt xuy\xEAn su\u1ED1t\n\u2022 C\u1EA5p ch\u1EE9ng nh\u1EADn khi ho\xE0n th\xE0nh",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/1Mt5DrHVsv5TjzAFv2N1vl3qQ85xZd5f9/view?usp=sharing"
  },
  {
    id: "he-thong-thong-tin-dieu-hanh-tac-nghiep",
    title: "T\u1EACP HU\u1EA4N PH\u1EA6N M\u1EC0M iCPV - H\u1EC6 TH\u1ED0NG TH\xD4NG TIN \u0110I\u1EC0U H\xC0NH T\xC1C NGHI\u1EC6P C\xC1C C\u01A0 QUAN \u0110\u1EA2NG",
    duration: "1 BU\u1ED4I - 4 GI\u1EDC",
    description: "Gi\u1EDBi thi\u1EC7u\n\nH\u1EC7 th\u1ED1ng th\xF4ng tin \u0111i\u1EC1u h\xE0nh t\xE1c nghi\u1EC7p c\xE1c c\u01A1 quan \u0110\u1EA3ng l\xE0 ph\u1EA7n m\u1EC1m gi\xFAp s\u1ED1 h\xF3a c\xF4ng t\xE1c qu\u1EA3n l\xFD v\u0103n b\u1EA3n v\xE0 \u0111i\u1EC1u h\xE0nh t\xE1c nghi\u1EC7p, mang l\u1EA1i nhi\u1EC1u l\u1EE3i \xEDch thi\u1EBFt th\u1EF1c cho to\xE0n b\u1ED9 c\u01A1 quan \u0110\u1EA3ng t\u1EEB Trung \u01B0\u01A1ng \u0111\u1EBFn \u0110\u1ECBa ph\u01B0\u01A1ng, g\xF3p ph\u1EA7n n\xE2ng cao hi\u1EC7u qu\u1EA3 c\xF4ng t\xE1c qu\u1EA3n l\xFD v\xE0 \u0111i\u1EC1u h\xE0nh, x\xE2y d\u1EF1ng m\u1ED9t n\u1EC1n h\xE0nh ch\xEDnh chuy\xEAn nghi\u1EC7p, hi\u1EC7n \u0111\u1EA1i v\xE0 hi\u1EC7u qu\u1EA3.\n\nL\u1EE3i \xEDch:\n\u2022 N\xE2ng cao hi\u1EC7u qu\u1EA3 qu\u1EA3n l\xFD, \u0111i\u1EC1u h\xE0nh\n\u2022 S\u1ED1 h\xF3a quy tr\xECnh, t\u1EA1o m\xF4i tr\u01B0\u1EDDng l\xE0m vi\u1EC7c hi\u1EC7n \u0111\u1EA1i\n\u2022 T\u0103ng c\u01B0\u1EDDng ph\u1ED1i h\u1EE3p v\xE0 trao \u0111\u1ED5i th\xF4ng tin\n\nTh\xF4ng tin kh\xF3a h\u1ECDc:\n\n\u0110\u1ED1i t\u01B0\u1EE3ng: Chuy\xEAn vi\xEAn, c\xE1n b\u1ED9 v\u0103n th\u01B0, l\xE3nh \u0111\u1EA1o qu\u1EA3n l\xFD c\u1EA5p \u0110\u1EA3ng\nTh\u1EDDi l\u01B0\u1EE3ng: 01 bu\u1ED5i (04 gi\u1EDD)\nS\u0129 s\u1ED1: 40 h\u1ECDc vi\xEAn/l\u1EDBp\nH\xECnh th\u1EE9c: \u0110\xE0o t\u1EA1o t\u1EADp trung, h\u01B0\u1EDBng d\u1EABn v\xE0 th\u1EF1c h\xE0nh\n\nN\u1ED9i dung kh\xF3a h\u1ECDc:\n\nH\u01B0\u1EDBng d\u1EABn \u0111\u0103ng nh\u1EADp: Tr\xEAn web v\xE0 \u1EE9ng d\u1EE5ng di \u0111\u1ED9ng\n\nC\xE1c t\xEDnh n\u0103ng theo t\u1EEBng vai tr\xF2:\n\nL\xE3nh \u0111\u1EA1o:\n\u2022 Cho \xFD ki\u1EBFn phi\u1EBFu tr\xECnh\n\u2022 Ph\xEA duy\u1EC7t & k\xFD duy\u1EC7t v\u0103n b\u1EA3n \u0111i\n\u2022 Chuy\u1EC3n x\u1EED l\xFD v\u0103n b\u1EA3n \u0111\u1EBFn\n\u2022 Xem dashboard nhi\u1EC7m v\u1EE5 v\xE0 ph\xEA duy\u1EC7t ti\u1EBFn \u0111\u1ED9\n\u2022 Xem th\xF4ng tin l\u1ECBch h\u1ECDp c\u1EE7a l\xE3nh \u0111\u1EA1o c\u1EA5p tr\xEAn\n\nChuy\xEAn vi\xEAn:\n\u2022 Tr\xECnh xin \xFD ki\u1EBFn, d\u1EF1 th\u1EA3o v\u0103n b\u1EA3n\n\u2022 Tr\xECnh x\u1EED l\xFD ho\u1EB7c h\u1EE7y lu\u1ED3ng v\u0103n b\u1EA3n\n\u2022 T\u1EA1o h\u1ED3 s\u01A1 c\xF4ng vi\u1EC7c\n\u2022 C\u1EADp nh\u1EADt ti\u1EBFn \u0111\u1ED9 nhi\u1EC7m v\u1EE5\n\u2022 Theo d\xF5i l\u1ECBch h\u1ECDp c\xE1 nh\xE2n\n\nV\u0103n th\u01B0:\n\u2022 Ti\u1EBFp nh\u1EADn v\u0103n b\u1EA3n \u0111\u1EBFn (\u0111i\u1EC7n t\u1EED, gi\u1EA5y, li\xEAn th\xF4ng)\n\u2022 Chuy\u1EC3n x\u1EED l\xFD v\u0103n b\u1EA3n\n\u2022 C\u1EA5p s\u1ED1 ban h\xE0nh, \u0111\xF3ng d\u1EA5u v\u0103n b\u1EA3n\n\u2022 Xem lu\u1ED3ng x\u1EED l\xFD\n\u2022 Xu\u1EA5t b\xE1o c\xE1o v\u0103n b\u1EA3n \u0111i/\u0111\u1EBFn\n\u2022 T\u1EA1o h\u1ED3 s\u01A1 c\xF4ng vi\u1EC7c\n\nC\xE1c quy tr\xECnh nghi\u1EC7p v\u1EE5:\n\u2022 V\u0103n b\u1EA3n \u0111\u1EBFn\n\u2022 V\u0103n b\u1EA3n \u0111i\n\u2022 Qu\u1EA3n l\xFD nhi\u1EC7m v\u1EE5\n\u2022 L\u1ECBch h\u1ECDp\n\u2022 Danh m\u1EE5c c\xE1c module kh\xE1c",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/1PbvN-CaAR4Z4cG7t5QIdJNCDCz2tlyBO/view?usp=sharing"
  },
  {
    id: "khoa-hoc-tieng-hoa",
    title: "KH\xD3A H\u1ECCC TI\u1EBENG HOA GIAO TI\u1EBEP V\xC0 N\u1EC0N T\u1EA2NG",
    duration: "L\u1ED8 TR\xCCNH 16 TH\xC1NG - 3 GIAI \u0110O\u1EA0N",
    description: "\u0110\u1ECBnh H\u01B0\u1EDBng - Chinh Ph\u1EE5c (L\u1ED9 tr\xECnh 16 th\xE1ng)\n\nGiai \u0111o\u1EA1n 1: Giao ti\u1EBFp - N\u1EC1n t\u1EA3ng (A1)\nGiai \u0111o\u1EA1n 2: Trung c\u1EA5p & Luy\u1EC7n thi HSK/TOCFL 1-2\nGiai \u0111o\u1EA1n 3: N\xE2ng cao & Ti\u1EBFng Hoa Chuy\xEAn ng\xE0nh\n\nGi\u1EDBi thi\u1EC7u\n\nTrong xu th\u1EBF h\u1ED9i nh\u1EADp to\xE0n c\u1EA7u, ti\u1EBFng Hoa ng\xE0y c\xE0ng \u0111\xF3ng vai tr\xF2 quan tr\u1ECDng. Ch\u01B0\u01A1ng tr\xECnh Ti\u1EBFng Hoa Giao ti\u1EBFp N\u1EC1n t\u1EA3ng t\u1EA1i SaigonLab \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng nh\u1EB1m trang b\u1ECB cho h\u1ECDc vi\xEAn v\xE0 doanh nghi\u1EC7p n\u1EC1n t\u1EA3ng giao ti\u1EBFp v\u1EEFng ch\u1EAFc, \u1EE9ng d\u1EE5ng linh ho\u1EA1t trong th\u1EF1c ti\u1EC5n.\n\nGiai \u0111o\u1EA1n 1: Giao ti\u1EBFp - N\u1EC1n t\u1EA3ng (A1) - 24 bu\u1ED5i\n\nM\u1EE5c ti\xEAu:\n\u2022 L\xE0m quen v\u1EDBi h\u1EC7 th\u1ED1ng Pinyin v\xE0 thanh \u0111i\u1EC7u ti\u1EBFng Hoa\n\u2022 Giao ti\u1EBFp t\u1EF1 tin c\xE1c ch\u1EE7 \u0111\u1EC1 thi\u1EBFt y\u1EBFu nh\u01B0: th\xF4ng tin c\xE1 nh\xE2n, mua s\u1EAFm, \u0103n u\u1ED1ng, h\u1ECFi \u0111\u01B0\u1EDDng, du l\u1ECBch...\n\u2022 X\xE2y d\u1EF1ng n\u1EC1n t\u1EA3ng ng\xF4n ng\u1EEF v\u1EEFng ch\u1EAFc, t\u1EA1o ti\u1EC1n \u0111\u1EC1 h\u1ECDc n\xE2ng cao\n\nL\u1EF1a ch\u1ECDn ch\u01B0\u01A1ng tr\xECnh:\n\nCh\u01B0\u01A1ng tr\xECnh Chu\u1EA9n (Standard Track):\nTh\u1EDDi gian: 6 th\xE1ng (1 bu\u1ED5i/tu\u1EA7n, 2 ti\u1EBFng/bu\u1ED5i)\nPh\xF9 h\u1EE3p v\u1EDBi: Ng\u01B0\u1EDDi \u0111i l\xE0m, doanh nghi\u1EC7p, c\u1EA7n l\u1ECBch h\u1ECDc linh ho\u1EA1t, x\xE2y d\u1EF1ng n\u1EC1n t\u1EA3ng ti\u1EBFng Hoa b\u01B0\u1EDBc \u0111\u1EA7u\n\nCh\u01B0\u01A1ng tr\xECnh T\u0103ng t\u1ED1c (Fast Track):\nTh\u1EDDi gian: 3 th\xE1ng (2 bu\u1ED5i/tu\u1EA7n, 4 ti\u1EBFng/bu\u1ED5i)\nPh\xF9 h\u1EE3p v\u1EDBi: Ng\u01B0\u1EDDi c\u1EA7n h\u1ECDc nhanh, chu\u1EA9n b\u1ECB thi HSK ho\u1EB7c du h\u1ECDc, xu\u1EA5t kh\u1EA9u lao \u0111\u1ED9ng\n\nH\xECnh th\u1EE9c: Tr\u1EF1c ti\u1EBFp / Tr\u1EF1c tuy\u1EBFn\n\nCam k\u1EBFt c\u1EE7a SAIGONLAB:\n\u2022 L\u1ED9 tr\xECnh r\xF5 r\xE0ng\n\u2022 Gi\xE1o tr\xECnh chu\u1EA9n, c\u1EADp nh\u1EADt m\u1EDBi\n\u2022 Gi\u1EA3ng vi\xEAn c\xF3 kinh nghi\u1EC7m th\u1EF1c t\u1EBF, \u0111\u1ED3ng h\xE0nh s\xE1t sao\n\u2022 Ho\u1EA1t \u0111\u1ED9ng t\u01B0\u01A1ng t\xE1c, luy\u1EC7n n\xF3i \u2013 ph\u1EA3n x\u1EA1 nhanh\n\u2022 Cam k\u1EBFt k\u1EBFt qu\u1EA3 theo t\u1EEBng giai \u0111o\u1EA1n\n\n\u0110\u1EB7c bi\u1EC7t:\n\u2022 Thi\u1EBFt k\u1EBF kh\xF3a h\u1ECDc theo y\xEAu c\u1EA7u: SAIGONLAB nh\u1EADn thi\u1EBFt k\u1EBF c\xE1c kh\xF3a h\u1ECDc v\u1EDBi n\u1ED9i dung s\xE1t th\u1EF1c t\u1EBF c\xF4ng vi\u1EC7c, t\u1EADp trung v\xE0o k\u1EF9 n\u0103ng giao ti\u1EBFp v\xE0 chuy\xEAn ng\xE0nh\n\u2022 N\u1EC1n t\u1EA3ng LMS hi\u1EC7n \u0111\u1EA1i: H\u1ED7 tr\u1EE3 h\u1ECDc m\u1ECDi l\xFAc m\u1ECDi n\u01A1i v\u1EDBi kho h\u1ECDc li\u1EC7u phong ph\xFA, t\u01B0\u01A1ng t\xE1c cao v\xE0 qu\u1EA3n l\xFD h\u1ECDc t\u1EADp hi\u1EC7u qu\u1EA3",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/1eMn0FaqWMmz3WLPJ_XFQYazsZY1uxIvD/view?usp=sharing"
  },
  {
    id: "ung-dung-ai-chat-gpt",
    title: "\u1EE8NG D\u1EE4NG AI & CHAT GPT N\xC2NG CAO HI\u1EC6U QU\u1EA2 C\xD4NG VI\u1EC6C",
    duration: "1-2 BU\u1ED4I - 3-4 GI\u1EDC/BU\u1ED4I",
    description: "T\u0103ng t\u1ED1c - T\u1ED1i \u01B0u - D\u1EABn \u0111\u1EA7u th\u1EDDi \u0111\u1EA1i AI\n\nTh\u1EDDi l\u01B0\u1EE3ng: 1 - 2 bu\u1ED5i (3-4 ti\u1EBFng/bu\u1ED5i)\nH\xECnh th\u1EE9c: Online / Offline\n\nB\u1EA1n c\xF3 \u0111ang \u0111\u1ED1i m\u1EB7t v\u1EDBi...?\n\u2022 Kh\u1ED1i l\u01B0\u1EE3ng c\xF4ng vi\u1EC7c ng\xE0y c\xE0ng t\u0103ng?\n\u2022 Thi\u1EBFu th\u1EDDi gian cho c\xE1c \xFD t\u01B0\u1EDFng s\xE1ng t\u1EA1o?\n\u2022 Kh\xF3 theo k\u1ECBp t\u1ED1c \u0111\u1ED9 ph\xE1t tri\u1EC3n c\u1EE7a c\xF4ng ngh\u1EC7?\n\nB\u1EA1n s\u1EBD h\u1ECDc \u0111\u01B0\u1EE3c g\xEC?\n\u2022 Hi\u1EC3u \u0111\xFAng b\u1EA3n ch\u1EA5t AI & ChatGPT v\xE0 c\xE1ch \u1EE9ng d\u1EE5ng hi\u1EC7u qu\u1EA3 v\xE0o c\xF4ng vi\u1EC7c\n\u2022 So\u1EA1n th\u1EA3o v\u0103n b\u1EA3n, email; t\u1EA1o bi\u1EC3u m\u1EABu, k\u1EBF ho\u1EA1ch, b\xE1o c\xE1o\n\u2022 S\xE1ng t\u1EA1o, ph\xE1t tri\u1EC3n n\u1ED9i dung, k\u1ECBch b\u1EA3n, qu\u1EA3ng c\xE1o\n\u2022 Ra quy\u1EBFt \u0111\u1ECBnh nhanh, ch\xEDnh x\xE1c h\u01A1n nh\u1EDD ph\xE2n t\xEDch v\xE0 g\u1EE3i \xFD t\u1EEB AI\n\u2022 T\xEDch h\u1EE3p AI v\xE0o quy tr\xECnh c\xE1 nh\xE2n & t\u1ED5 ch\u1EE9c\n\u2022 N\xE2ng t\u1EA7m giao ti\u1EBFp chuy\xEAn nghi\u1EC7p: Vi\u1EBFt hay h\u01A1n, n\xF3i kh\xE9o h\u01A1n\n\nKh\xF3a h\u1ECDc n\xE0y d\xE0nh cho ai?\n\u2022 Chuy\xEAn vi\xEAn n\u1ED9i dung, marketing\n\u2022 Chuy\xEAn vi\xEAn h\xE0nh ch\xEDnh \u2013 v\u0103n ph\xF2ng\n\u2022 Gi\xE1o vi\xEAn & H\u1ECDc sinh, sinh vi\xEAn\n\u2022 Ng\u01B0\u1EDDi l\xE0m kinh doanh - qu\u1EA3n l\xFD\n\u2022 Ng\u01B0\u1EDDi m\u1EDBi b\u1EAFt \u0111\u1EA7u ti\u1EBFp c\u1EADn c\xF4ng ngh\u1EC7\n\n\u0110\u1EB7c bi\u1EC7t:\n\u2022 Thi\u1EBFt k\u1EBF theo y\xEAu c\u1EA7u: SAIGONLAB nh\u1EADn thi\u1EBFt k\u1EBF kh\xF3a h\u1ECDc v\u1EDBi n\u1ED9i dung b\xE1m s\xE1t b\xE0i to\xE1n th\u1EF1c t\u1EBF c\u1EE7a doanh nghi\u1EC7p, gi\xFAp h\u1ECDc vi\xEAn \u0111\u01B0\u1EE3c 'c\u1EA7m tay ch\u1EC9 vi\u1EC7c'\n\u2022 N\u1EC1n t\u1EA3ng LMS hi\u1EC7n \u0111\u1EA1i: H\u1ED7 tr\u1EE3 h\u1ECDc m\u1ECDi l\xFAc m\u1ECDi n\u01A1i v\u1EDBi kho h\u1ECDc li\u1EC7u phong ph\xFA, t\u01B0\u01A1ng t\xE1c cao v\xE0 qu\u1EA3n l\xFD h\u1ECDc t\u1EADp hi\u1EC7u qu\u1EA3",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/1N8ULa5UeBJUjRgiNWo1NwqNSDGc_LgnD/view?usp=sharing"
  },
  {
    id: "ung-dung-ai-san-xuat-video",
    title: "KH\xD3A \u0110\xC0O T\u1EA0O \u1EE8NG D\u1EE4NG AI S\u1EA2N XU\u1EA4T VIDEO & S\xC1NG T\u1EA0O N\u1ED8I DUNG",
    duration: "2 BU\u1ED4I + 5 NG\xC0Y TH\u1EF0C H\xC0NH",
    description: "H\xECnh th\u1EE9c:\n\u2022 2 bu\u1ED5i \u0111\xE0o t\u1EA1o t\u1EADp trung\n\u2022 5 ng\xE0y ti\u1EBFp theo th\u1EF1c h\xE0nh online (15 - 30 ph\xFAt/ng\xE0y)\n\n\u0110\u1ED1i t\u01B0\u1EE3ng:\n\u2022 L\xE3nh \u0111\u1EA1o\n\u2022 Nh\xE2n vi\xEAn h\u1ED7 tr\u1EE3 kinh doanh\n\u2022 Nh\xE2n vi\xEAn k\u1EF9 thu\u1EADt\n\nM\u1EE5c ti\xEAu:\n\u2022 N\u1EAFm \u0111\u01B0\u1EE3c quy tr\xECnh s\u1EA3n xu\u1EA5t video content\n\u2022 Bi\u1EBFt c\xE1ch s\u1EED d\u1EE5ng AI v\xE0 c\xE1c c\xF4ng c\u1EE5 li\xEAn quan\n\u2022 Th\u1EF1c h\xE0nh x\xE2y d\u1EF1ng k\xEAnh TikTok\n\n\u0110\u1EB7c bi\u1EC7t: SAIGONLAB nh\u1EADn t\u01B0 v\u1EA5n, thi\u1EBFt k\u1EBF, v\xE0 t\xF9y ch\u1EC9nh kh\xF3a h\u1ECDc theo y\xEAu c\u1EA7u c\u1EE7a \u0111\u01A1n v\u1ECB.\n\nN\u1ED9i dung ch\u01B0\u01A1ng tr\xECnh:\n\nC\u1EADp nh\u1EADt & Tr\u1EA3i nghi\u1EC7m AI m\u1EDBi nh\u1EA5t:\n\u2022 T\u1ED5ng quan h\u01A1n 25.000 c\xF4ng c\u1EE5 AI\n\u2022 Th\u1EF1c h\xE0nh tr\u1EA3i nghi\u1EC7m c\xE1c \u1EE9ng d\u1EE5ng AI\n\nX\xE2y d\u1EF1ng chi\u1EBFn l\u01B0\u1EE3c n\u1ED9i dung v\u1EDBi AI:\n\u2022 \u1EE8ng d\u1EE5ng AI x\xE2y d\u1EF1ng chi\u1EBFn l\u01B0\u1EE3c n\u1ED9i dung theo k\u1EBF ho\u1EA1ch kinh doanh v\xE0 \u0111\u1ECBnh h\u01B0\u1EDBng th\u1ECB tr\u01B0\u1EDDng\n\u2022 Th\u1EF1c h\xE0nh l\u1EADp chi\u1EBFn l\u01B0\u1EE3c n\u1ED9i dung theo t\u1EEBng m\u1EE5c ti\xEAu c\u1EE5 th\u1EC3\n\nL\u1EADp k\u1EBF ho\u1EA1ch n\u1ED9i dung cho nh\xF3m kh\xE1ch h\xE0ng:\n\u2022 L\u1EADp b\u1ED9 k\u1EBF ho\u1EA1ch n\u1ED9i dung Social Media cho 3 nh\xF3m: B2B, B2C v\xE0 kh\xE1ch h\xE0ng tr\u1EBB\n\u2022 Th\u1EF1c h\xE0nh: L\u1EADp k\u1EBF ho\u1EA1ch theo chi\u1EBFn l\u01B0\u1EE3c \u0111\xE3 x\xE2y d\u1EF1ng\n\nX\xE2y d\u1EF1ng n\u1ED9i dung k\u1ECBch b\u1EA3n:\n\u2022 S\u1EA3n xu\u1EA5t k\u1ECBch b\u1EA3n cho t\u1EEBng nh\xF3m s\u1EA3n ph\u1EA9m c\u1EE7a doanh nghi\u1EC7p\n\nHu\u1EA5n luy\u1EC7n tr\u1EE3 l\xFD AI & S\xE1ng t\u1EA1o video chuy\xEAn nghi\u1EC7p:\n\u2022 \u1EE8ng d\u1EE5ng AI x\xE2y d\u1EF1ng chi\u1EBFn l\u01B0\u1EE3c n\u1ED9i dung theo k\u1EBF ho\u1EA1ch kinh doanh & \u0111\u1ECBnh h\u01B0\u1EDBng th\u1ECB tr\u01B0\u1EDDng\n\u2022 Th\u1EF1c h\xE0nh l\u1EADp chi\u1EBFn l\u01B0\u1EE3c n\u1ED9i dung theo t\u1EEBng m\u1EE5c ti\xEAu c\u1EE5 th\u1EC3\n\nTh\u1EF1c h\xE0nh s\u1EA3n xu\u1EA5t video v\u1EDBi AI:\n\u2022 \u1EE8ng d\u1EE5ng AI \u0111\u1EC3 t\u1EA1o ra s\u1EA3n ph\u1EA9m video ho\xE0n ch\u1EC9nh\n\nK\u1EBFt qu\u1EA3 \u0111\u1EA1t \u0111\u01B0\u1EE3c:\n\u2022 Ki\u1EBFn th\u1EE9c v\xE0 k\u1EF9 n\u0103ng s\u1EA3n xu\u1EA5t content video chu\u1EA9n TikTok\n\nCam k\u1EBFt c\u1EE7a SAIGONLAB:\n\u2022 Gi\u1EA3ng vi\xEAn ch\u1EA5t l\u01B0\u1EE3ng v\u1EDBi 25+ n\u0103m kinh nghi\u1EC7m th\u1EF1c chi\u1EBFn\n\u2022 H\u1ECDc qua m\xF4 ph\u1ECFng \u2013 th\u1EF1c h\xE0nh \u2013 t\xECnh hu\u1ED1ng th\u1EF1c ti\u1EC5n\n\u2022 T\xE0i li\u1EC7u, h\xECnh \u1EA3nh, case study r\xF5 r\xE0ng\n\u2022 H\u1ED7 tr\u1EE3 gi\u1EA3i \u0111\xE1p th\u1EAFc m\u1EAFc chi ti\u1EBFt\n\u2022 \u0110\xE1nh gi\xE1 b\u1EB1ng b\xE0i thu ho\u1EA1ch cu\u1ED1i kh\xF3a\n\u2022 C\u1EA5p ch\u1EE9ng nh\u1EADn khi ho\xE0n th\xE0nh kh\xF3a h\u1ECDc",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/1ijCiWHD2tN2wWHlMZWygVT9-ZpC-6-CK/view?usp=sharing"
  },
  {
    id: "ung-dung-ai-hanh-chinh-van-phong",
    title: "\u1EE8NG D\u1EE4NG AI TRONG C\xD4NG T\xC1C H\xC0NH CH\xCDNH V\u0102N PH\xD2NG",
    duration: "1 NG\xC0Y - 2 BU\u1ED4I",
    description: "Gi\u1EDBi thi\u1EC7u chung\n\nKh\xF3a h\u1ECDc \u1EE9ng d\u1EE5ng AI trong c\xF4ng t\xE1c h\xE0nh ch\xEDnh v\u0103n ph\xF2ng do Trung t\xE2m \u0111\xE0o t\u1EA1o SAIGONLAB t\u1ED5 ch\u1EE9c s\u1EBD gi\xFAp c\xE1n b\u1ED9, c\xF4ng ch\u1EE9c c\u1EA5p c\u01A1 s\u1EDF n\u1EAFm v\u1EEFng k\u1EF9 n\u0103ng khai th\xE1c hi\u1EC7u qu\u1EA3 c\xE1c c\xF4ng c\u1EE5 AI, t\u1EEB \u0111\xF3 n\xE2ng cao hi\u1EC7u su\u1EA5t l\xE0m vi\u1EC7c, \u0111\u1EA3m b\u1EA3o t\xEDnh ch\xEDnh x\xE1c, logic v\xE0 b\u1EA3o m\u1EADt trong c\xF4ng v\u1EE5.\n\nTh\xF4ng tin kh\xF3a h\u1ECDc:\n\n\u0110\u1ED1i t\u01B0\u1EE3ng:\n\u2022 C\xE1n b\u1ED9 c\xF4ng ch\u1EE9c v\u0103n ph\xF2ng \u1EE6y ban ph\u01B0\u1EDDng/x\xE3\n\u2022 Nh\xE2n s\u1EF1 h\xE0nh ch\xEDnh\n\u2022 \u0110\u01A1n v\u1ECB h\xE0nh ch\xEDnh tri\u1EC3n khai chuy\u1EC3n \u0111\u1ED5i s\u1ED1\n\nTh\u1EDDi l\u01B0\u1EE3ng: 01 ng\xE0y (02 bu\u1ED5i)\nH\xECnh th\u1EE9c: \u0110\xE0o t\u1EA1o t\u1EADp trung, ch\xFA tr\u1ECDng th\u1EF1c h\xE0nh\n\nL\u1EE3i \xEDch khi tham gia:\n\u2022 Hi\u1EC3u r\xF5 ti\u1EC1m n\u0103ng, r\u1EE7i ro v\xE0 c\xE1ch \u1EE9ng d\u1EE5ng AI trong h\xE0nh ch\xEDnh\n\u2022 Vi\u1EBFt k\u1EBF ho\u1EA1ch, b\xE1o c\xE1o, c\xF4ng v\u0103n... nhanh v\xE0 \u0111\xFAng chu\u1EA9n h\u01A1n\n\u2022 T\u1EA1o slide, s\u01A1 \u0111\u1ED3, v\u0103n b\u1EA3n tr\u1EF1c quan t\u1EEB AI\n\u2022 T\u1EF1 thi\u1EBFt l\u1EADp tr\u1EE3 l\xFD \u1EA3o h\u1ED7 tr\u1EE3 c\xF4ng vi\u1EC7c h\u1EB1ng ng\xE0y\n\u2022 Nh\u1EADn t\xE0i li\u1EC7u m\u1EABu \u2013 H\u1ECDc qua th\u1EF1c h\xE0nh \u2013 H\u1ED7 tr\u1EE3 t\u1EADn t\xECnh\n\nN\u1ED9i dung kh\xF3a h\u1ECDc:\n\nGi\u1EDBi thi\u1EC7u AI v\xE0 ChatGPT:\n\u2022 T\u1ED5ng quan v\u1EC1 AI\n\u2022 L\u1EE3i \xEDch v\xE0 th\xE1ch th\u1EE9c khi \u1EE9ng d\u1EE5ng AI trong c\xF4ng t\xE1c h\xE0nh ch\xEDnh v\u0103n ph\xF2ng\n\u2022 Nguy\xEAn t\u1EAFc c\u1EA7n tu\xE2n th\u1EE7 khi s\u1EED d\u1EE5ng AI trong m\xF4i tr\u01B0\u1EDDng c\xF4ng v\u1EE5\n\u2022 M\u1ED9t s\u1ED1 c\xF4ng c\u1EE5 AI n\u1ED5i b\u1EADt: ChatGPT, Google Gemini, Grok...\n\nH\u01B0\u1EDBng d\u1EABn vi\u1EBFt prompt hi\u1EC7u qu\u1EA3 cho ChatGPT:\n\u2022 Kh\xE1i ni\u1EC7m prompt, ph\xE2n lo\u1EA1i v\xE0 c\xE1c k\u1EF9 thu\u1EADt vi\u1EBFt hi\u1EC7u qu\u1EA3\n\nK\u1EF9 n\u0103ng \u1EE9ng d\u1EE5ng trong c\xF4ng t\xE1c h\xE0nh ch\xEDnh v\u0103n ph\xF2ng:\n\u2022 Th\u1EF1c h\xE0nh c\xE1c k\u1EF9 thu\u1EADt vi\u1EBFt prompt hi\u1EC7u qu\u1EA3\n\nK\u1EF9 n\u0103ng \u1EE9ng d\u1EE5ng ChatGPT trong t\xECm ki\u1EBFm, ph\xE2n t\xEDch v\xE0 x\u1EED l\xFD th\xF4ng tin:\n\u2022 S\u1EED d\u1EE5ng ChatGPT cho nhi\u1EC1u lo\u1EA1i truy v\u1EA5n kh\xE1c nhau\n\u2022 Ph\xE2n t\xEDch d\u1EEF li\u1EC7u, nh\u1EADp li\u1EC7u th\xF4ng minh t\u1EEB nhi\u1EC1u ngu\u1ED3n\n\u2022 So\u1EA1n th\u1EA3o v\u0103n b\u1EA3n t\u1EEB m\u1EABu c\xF3 s\u1EB5n v\xE0 th\u1EF1c h\xE0nh t\u1ED5ng h\u1EE3p\n\nTruy\u1EC1n th\xF4ng v\xE0 tr\xECnh b\xE0y trong h\xE0nh ch\xEDnh:\n\u2022 T\u1EA1o slide tr\xECnh b\xE0y, b\xE1o c\xE1o h\u1ED9i ngh\u1ECB\n\u2022 V\u1EBD s\u01A1 \u0111\u1ED3 t\u01B0 duy, thi\u1EBFt k\u1EBF infographic h\u01B0\u1EDBng d\u1EABn th\u1EE7 t\u1EE5c\n\u2022 Th\u1EF1c h\xE0nh t\u1ED5ng h\u1EE3p\n\nTr\u1EE3 l\xFD \u1EA3o c\xE1 nh\xE2n h\xF3a:\n\u2022 Thi\u1EBFt l\u1EADp Tr\u1EE3 l\xFD \u1EA3o gi\xFAp vi\u1EC7c hi\u1EC7u qu\u1EA3\n\u2022 S\u1EED d\u1EE5ng AI c\xF3 tr\xE1ch nhi\u1EC7m\n\u2022 Trao \u0111\u1ED5i, th\u1EA3o lu\u1EADn v\u1EC1 \u1EE9ng d\u1EE5ng AI trong c\xF4ng vi\u1EC7c",
    imageUrl: "/images/course_placeholder.png",
    detailUrl: "https://drive.google.com/file/d/1rIRNmwrpOpMiUGThbucQuvimRfN00uzS/view?usp=sharing"
  }
];

// server/data/faculty.data.ts
var facultyData = [
  // Core faculty
  {
    id: "tran-thanh-phong",
    name: "TR\u1EA6N THANH PHONG",
    degree: "B\u1EB1ng c\u1EA5p: B. Eng",
    experience: "Kinh nghi\u1EC7m: 15 n\u0103m kinh nghi\u1EC7m th\u1EF1c hi\u1EC7n c\xE1c d\u1EF1 \xE1n CNTT v\xE0 gi\u1EA3ng d\u1EA1y.",
    specialty: "Ch\u1EE9ng ch\u1EC9: CCNP, CCSP",
    isCore: 1,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "tran-van-ly",
    name: "TR\u1EA6N V\u0102N L\xDD",
    degree: "H\u1ECDc v\u1ECB: B. Eng, M. Eng",
    experience: "Kinh nghi\u1EC7m: Chuy\xEAn gia t\u01B0 v\u1EA5n, \u0111\xE0o t\u1EA1o v\u1EC1 Qu\u1EA3n tr\u1ECB doanh nghi\u1EC7p v\xE0 Qu\u1EA3n tr\u1ECB ngu\u1ED3n nh\xE2n l\u1EF1c.",
    specialty: "",
    isCore: 1,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "bui-quang-tan",
    name: "B\xD9I QUANG T\xC2N",
    degree: "B\u1EB1ng c\u1EA5p: K\u1EF9 s\u01B0 C\xF4ng ngh\u1EC7 Th\xF4ng tin",
    experience: "Kinh nghi\u1EC7m: H\u01A1n 12 n\u0103m kinh nghi\u1EC7m tri\u1EC3n khai c\xE1c d\u1EF1 \xE1n CNTT.",
    specialty: "",
    isCore: 1,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "le-thanh-ha",
    name: "L\xCA THANH H\xC0",
    degree: "B\u1EB1ng c\u1EA5p: B. Eng, M. Eng",
    experience: "Kinh nghi\u1EC7m: H\u01A1n 12 n\u0103m kinh nghi\u1EC7m tri\u1EC3n khai c\xE1c d\u1EF1 \xE1n gia c\xF4ng ph\u1EA7n m\u1EC1m.",
    specialty: "",
    isCore: 1,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  // Extended faculty
  {
    id: "hoang-le-minh",
    name: "HO\xC0NG L\xCA MINH",
    degree: "H\u1ECDc v\u1ECB: Ti\u1EBFn s\u0129",
    experience: "Kinh nghi\u1EC7m: Tr\xEAn 40 n\u0103m",
    specialty: "Chuy\xEAn m\xF4n: AI & DA",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "tran-dan-thu",
    name: "TR\u1EA6N \u0110AN TH\u01AF",
    degree: "H\u1ECDc v\u1ECB: PGS.TS",
    experience: "Kinh nghi\u1EC7m: Tr\xEAn 35 n\u0103m",
    specialty: "Chuy\xEAn m\xF4n: T\u01B0 v\u1EA5n cao c\u1EA5p Honeynet",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "thai-hoang-nam",
    name: "TH\xC1I HO\xC0NG NAM",
    degree: "H\u1ECDc v\u1ECB: Th\u1EA1c s\u0129",
    experience: "Kinh nghi\u1EC7m: H\u01A1n 7 n\u0103m kinh nghi\u1EC7m tri\u1EC3n khai c\xE1c d\u1EF1 \xE1n CNTT.",
    specialty: "",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "le-van-phan",
    name: "L\xCA V\u0102N PH\u1EACN",
    degree: "H\u1ECDc v\u1ECB: Th\u1EA1c s\u0129",
    experience: "Kinh nghi\u1EC7m: H\u01A1n 25 n\u0103m kinh nghi\u1EC7m tri\u1EC3n khai c\xE1c d\u1EF1 \xE1n CNTT.",
    specialty: "",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "le-dinh-viet-hai",
    name: "L\xCA \u0110\xCCNH VI\u1EC6T H\u1EA2I",
    degree: "H\u1ECDc v\u1ECB: Th\u1EA1c s\u0129",
    experience: "Kinh nghi\u1EC7m: tr\xEAn 25 n\u0103m kinh nghi\u1EC7m th\u1EF1c hi\u1EC7n c\xE1c d\u1EF1 \xE1n CNTT v\xE0 gi\u1EA3ng d\u1EA1y.",
    specialty: "T\u01B0 v\u1EA5n cao c\u1EA5p Honeynet.",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "ngo-hoang-hai",
    name: "NG\xD4 HO\xC0NG H\u1EA2I",
    degree: "H\u1ECDc v\u1ECB: Th\u1EA1c s\u0129",
    experience: "Kinh nghi\u1EC7m: tr\xEAn 10 n\u0103m kinh nghi\u1EC7m th\u1EF1c hi\u1EC7n c\xE1c d\u1EF1 \xE1n CNTT v\xE0 gi\u1EA3ng d\u1EA1y.",
    specialty: "Chuy\xEAn m\xF4n: Linux",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "tran-minh-hao",
    name: "TR\u1EA6N MINH H\u1EA2O",
    degree: "H\u1ECDc v\u1ECB: Th\u1EA1c s\u0129",
    experience: "Kinh nghi\u1EC7m: tr\xEAn 20 n\u0103m",
    specialty: "Chuy\xEAn m\xF4n: Linux",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "phan-nguyen",
    name: "PHAN NGUY\u1EC4N",
    degree: "H\u1ECDc v\u1ECB: Th\u1EA1c s\u0129",
    experience: "Kinh nghi\u1EC7m: tr\xEAn 15 n\u0103m",
    specialty: "Chuy\xEAn m\xF4n: Dev",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "nguyen-minh-hien",
    name: "NGUY\u1EC4N MINH HI\u1EC0N",
    degree: "H\u1ECDc v\u1ECB: C\u1EED nh\xE2n",
    experience: "Kinh nghi\u1EC7m: tr\xEAn 1 n\u0103m",
    specialty: "Chuy\xEAn m\xF4n: Linux",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  },
  {
    id: "nguyen-phi",
    name: "NGUY\u1EC4N PHI",
    degree: "H\u1ECDc v\u1ECB: K\u1EF9 s\u01B0",
    experience: "Kinh nghi\u1EC7m: Tr\xEAn 3 n\u0103m",
    specialty: "Chuy\xEAn m\xF4n: Linux",
    isCore: 0,
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
  }
];

// server/data/news.data.ts
var newsData = [
  {
    id: "ethical-hacking-core-skills",
    title: "Ethical Hacking Core Skills \u2013 Ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o th\u1EF1c chi\u1EBFn t\u1EA1i SAIGONLAB",
    author: "Nguy\u1EC5n Oanh",
    date: "01/08/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/CEHH.png",
    url: "https://www.saigonlab.edu.vn/ethical-hacking-core-skills-chuong-trinh-dao-tao-thuc-chien-tai-saigonlab.html"
  },
  {
    id: "ai-military-training",
    title: "\u0110\u01B0a AI v\xE0o m\xF4i tr\u01B0\u1EDDng qu\xE2n \u0111\u1ED9i \u2013 Z755: T\u1EADp hu\u1EA5n th\u1EF1c chi\u1EBFn c\xF9ng SAIGONLAB",
    author: "Nguy\u1EC5n Oanh",
    date: "21/07/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/07/z6810414425852_7f2008a9e44f3d608b1e683d4767f931-1024x575.jpg",
    url: "https://www.saigonlab.edu.vn/dua-ai-vao-moi-truong-quan-doi-z755-tap-huan-thuc-chien-cung-saigonlab.html"
  },
  {
    id: "vnpt-ai-video",
    title: "VNPT B\u1EBFn Tre Ho\xE0n Th\xE0nh Kh\xF3a H\u1ECDc \u1EE8ng D\u1EE5ng AI S\u1EA3n Xu\u1EA5t Video Content C\xF9ng SAIGONLAB",
    author: "Nguy\u1EC5n Oanh",
    date: "30/06/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/06/9.png",
    url: "https://www.saigonlab.edu.vn/vnpt-ben-tre-hoan-thanh-khoa-hoc-ung-dung-ai-san-xuat-video-content-cung-saigonlab.html"
  },
  {
    id: "ba-ria-vung-tau-ai",
    title: "SAIGONLAB HO\xC0N TH\xC0NH KH\xD3A H\u1ECCC \u1EE8NG D\u1EE4NG AI TRONG CHUY\u1EC2N \u0110\u1ED4I S\u1ED0 T\u1EA0I S\u1EDE KHOA H\u1ECCC V\xC0 C\xD4NG NGH\u1EC6 B\xC0 R\u1ECAA \u2013 V\u0168NG T\xC0U",
    author: "Nguy\u1EC5n Oanh",
    date: "10/06/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/06/IMG_2800-1024x482.jpg",
    url: "https://www.saigonlab.edu.vn/saigonlab-hoan-thanh-khoa-hoc-ung-dung-ai-trong-chuyen-doi-so-tai-so-khoa-hoc-va-cong-nghe-ba-ria-vung-tau.html"
  },
  {
    id: "bm4-solution",
    title: "GI\u1EDAI THI\u1EC6U GI\u1EA2I PH\xC1P CHUY\u1EC2N \u0110\u1ED4I S\u1ED0 BM4.0",
    author: "Nguy\u1EC5n Oanh",
    date: "26/05/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/05/z6634735001696_bd511f216e257cf9dc5ece50a57e8005-1024x578.jpg",
    url: "https://www.saigonlab.edu.vn/gioi-thieu-giai-phap-chuyen-doi-so-bm4-0.html"
  },
  {
    id: "sctv-training",
    title: "Ho\xE0n Th\xE0nh Kh\xF3a \u0110\xE0o T\u1EA1o K\u1EF9 Thu\u1EADt Chuy\xEAn S\xE2u Ph\xE1t Tri\u1EC3n Kh\xE1ch H\xE0ng Doanh Nghi\u1EC7p c\xF9ng SCTV",
    author: "Nguy\u1EC5n Oanh",
    date: "16/05/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/05/z6607787552269_28218128db54aa38f7de45fa4b546aad-1024x617.jpg",
    url: "https://www.saigonlab.edu.vn/hoan-thanh-khoa-dao-tao-ky-thuat-chuyen-sau-phat-trien-khach-hang-doanh-nghiep-cung-sctv.html"
  },
  {
    id: "z755-anniversary",
    title: "SAIGONLAB Tham D\u1EF1 L\u1EC5 K\u1EF7 Ni\u1EC7m 50 N\u0103m Ng\xE0y Truy\u1EC1n Th\u1ED1ng C\xF4ng Ty Th\xF4ng T\xEDn \u0110i\u1EC7n T\u1EED Z755",
    author: "Nguy\u1EC5n Oanh",
    date: "14/05/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/05/1.png",
    url: "https://www.saigonlab.edu.vn/saigonlab-tham-du-le-ky-niem-50-nam-ngay-truyen-thong-cong-ty-thong-tin-dien-tu-z755.html"
  },
  {
    id: "ai-sa-dec-training",
    title: 'SAIGONLAB HO\xC0N TH\xC0NH KH\xD3A T\u1EACP HU\u1EA4N "KHAI TH\xC1C V\xC0 \u1EE8NG D\u1EE4NG TR\xCD TU\u1EC6 NH\xC2N T\u1EA0O (AI) TR\xCAN \u0110\u1ECAA B\xC0N TH\xC0NH PH\u1ED0 SA \u0110\xC9C N\u0102M 2025"',
    author: "Nguy\u1EC5n Oanh",
    date: "30/04/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/network.png",
    url: "https://www.saigonlab.edu.vn/saigonlab-hoan-thanh-khoa-tap-huan-khai-thac-va-ung-dung-tri-tue-nhan-tao-ai-tren-dia-ban-thanh-pho-sa-dec-nam-2025.html"
  },
  {
    id: "saigonlab-ubnd-ba-ria-vung-tau",
    title: "SAIGONLAB x UBND B\xC0 R\u1ECAA \u2013 V\u0168NG T\xC0U",
    author: "Nguy\u1EC5n Oanh",
    date: "30/04/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/security.png",
    url: "https://www.saigonlab.edu.vn/saigonlab-x-ubnd-ba-ria-vung-tau.html"
  },
  {
    id: "cybersecurity-workshop",
    title: "Workshop An ninh m\u1EA1ng doanh nghi\u1EC7p t\u1EA1i SAIGONLAB",
    author: "Nguy\u1EC5n Oanh",
    date: "05/05/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/security.png",
    url: "https://www.saigonlab.edu.vn/workshop-an-ninh-mang-doanh-nghiep.html"
  },
  {
    id: "cisco-certification-course",
    title: "Kh\xF3a h\u1ECDc ch\u1EE9ng ch\u1EC9 Cisco CCNA m\u1EDBi nh\u1EA5t 2025",
    author: "Tr\u1EA7n Thanh Phong",
    date: "28/04/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/CCNA-SECURITY.png",
    url: "https://www.saigonlab.edu.vn/khoa-hoc-ccna-2025.html"
  },
  {
    id: "digital-transformation-seminar",
    title: "H\u1ED9i th\u1EA3o Chuy\u1EC3n \u0111\u1ED5i s\u1ED1 trong doanh nghi\u1EC7p SME",
    author: "L\xEA Minh \u0110\u1EE9c",
    date: "20/04/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/network.png",
    url: "https://www.saigonlab.edu.vn/hoi-thao-chuyen-doi-so-sme.html"
  },
  {
    id: "linux-training-program",
    title: "Ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o Linux System Administration",
    author: "Ng\xF4 Ho\xE0ng H\u1EA3i",
    date: "15/04/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/system.png",
    url: "https://www.saigonlab.edu.vn/chuong-trinh-dao-tao-linux.html"
  },
  {
    id: "mobile-security-update",
    title: "C\u1EADp nh\u1EADt xu h\u01B0\u1EDBng b\u1EA3o m\u1EADt Mobile trong n\u0103m 2025",
    author: "Ph\u1EA1m V\u0103n Nam",
    date: "08/04/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/mobile.png",
    url: "https://www.saigonlab.edu.vn/cap-nhat-bao-mat-mobile-2025.html"
  },
  {
    id: "cloud-computing-course",
    title: "Kh\xF3a h\u1ECDc Cloud Computing v\u1EDBi AWS & Azure",
    author: "B\xF9i Quang T\xE2n",
    date: "02/04/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/cloud.png",
    url: "https://www.saigonlab.edu.vn/khoa-hoc-cloud-computing.html"
  },
  {
    id: "penetration-testing-workshop",
    title: "Workshop Penetration Testing cho chuy\xEAn gia IT",
    author: "L\xEA \u0110\xECnh Vi\u1EC7t H\u1EA3i",
    date: "25/03/2025",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/CEHH.png",
    url: "https://www.saigonlab.edu.vn/workshop-penetration-testing.html"
  }
];

// server/data/other.data.ts
var partnersData = [
  { id: "dong-a", name: "Dong A", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/dongA-1.png" },
  { id: "sgs", name: "SGS", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/sgs.png" },
  { id: "acb", name: "ACB", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/ACB.png" },
  { id: "lagion", name: "Lagion", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/lagion.jpg" },
  { id: "mobifone", name: "Mobifone", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/mobie.png" },
  { id: "gmo", name: "GMO", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/GMo-1.png" },
  { id: "viettel", name: "Viettel", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/Viettel.png" },
  { id: "vnpt", name: "VNPT", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/logo-vnpt-e1713368612193.jpg" },
  { id: "htp", name: "HTP", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/htp.jpg" },
  { id: "vietcom", name: "Vietcom", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/vietcom-2.png" },
  { id: "kms", name: "KMS", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/kms.png" },
  { id: "vng", name: "VNG", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/VNG.png" }
];
var aboutData = [
  {
    id: "introduction",
    title: "GI\u1EDAI THI\u1EC6U V\u1EC0 SAIGONLAB",
    content: "Trung t\xE2m \u0111\xE0o t\u1EA1o an ninh m\u1EA1ng v\xE0 CNTT h\xE0ng \u0111\u1EA7u Vi\u1EC7t Nam v\u1EDBi s\u1EE9 m\u1EC7nh n\xE2ng cao ch\u1EA5t l\u01B0\u1EE3ng ngu\u1ED3n nh\xE2n l\u1EF1c c\xF4ng ngh\u1EC7 th\xF4ng tin.",
    imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/logosglab.jpg",
    orderIndex: 1
  },
  {
    id: "timeline-2016",
    title: "Timeline of Development - 2016",
    content: "Trung t\xE2m \u0111\xE0o t\u1EA1o SAIGONLAB \u0111\u01B0\u1EE3c th\xE0nh l\u1EADp v\xE0o th\xE1ng 7/2016, v\u1EDBi s\u1EE9 m\u1EC7nh ban \u0111\u1EA7u l\xE0 cung c\u1EA5p c\xE1c kh\xF3a \u0111\xE0o t\u1EA1o chuy\xEAn s\xE2u v\u1EC1 ch\u1EE9ng ch\u1EC9 K\u1EF9 s\u01B0 m\u1EA1ng Qu\u1ED1c t\u1EBF c\u1EE7a c\xE1c h\xE3ng c\xF4ng ngh\u1EC7 h\xE0ng \u0111\u1EA7u nh\u01B0 Cisco, Microsoft, Sun, Linux, Oracle, Juniper\u2026",
    imageUrl: null,
    orderIndex: 2
  },
  {
    id: "timeline-2017",
    title: "Timeline of Development - 2017",
    content: "Theo th\u1EDDi gian, SaigonLab kh\xF4ng ng\u1EEBng m\u1EDF r\u1ED9ng l\u0129nh v\u1EF1c ho\u1EA1t \u0111\u1ED9ng, t\u1EEB \u0111\xE0o t\u1EA1o chuy\xEAn s\xE2u \u0111\u1EBFn t\u01B0 v\u1EA5n \u2013 tri\u1EC3n khai gi\u1EA3i ph\xE1p c\xF4ng ngh\u1EC7 th\xF4ng tin, cung \u1EE9ng nh\xE2n s\u1EF1 IT v\xE0 h\u1ED7 tr\u1EE3 doanh nghi\u1EC7p chuy\u1EC3n \u0111\u1ED5i s\u1ED1. Tri\u1EC3n khai ch\u01B0\u01A1ng tr\xECnh On the Job Training \u2013 \u0111\xE0o t\u1EA1o v\xE0 tuy\u1EC3n d\u1EE5ng l\u1EADp tr\xECnh vi\xEAn th\u1EF1c chi\u1EBFn.",
    imageUrl: null,
    orderIndex: 3
  },
  {
    id: "timeline-present",
    title: "Timeline of Development - Hi\u1EC7n nay",
    content: "V\u1EDBi h\u01A1n 9 n\u0103m ph\xE1t tri\u1EC3n, SaigonLab \u0111\xE3 tr\u1EDF th\xE0nh \u0111\u1ED1i t\xE1c tin c\u1EADy c\u1EE7a nhi\u1EC1u doanh nghi\u1EC7p trong v\xE0 ngo\xE0i n\u01B0\u1EDBc, cung c\u1EA5p c\xE1c gi\u1EA3i ph\xE1p \u0111\xE0o t\u1EA1o v\xE0 c\xF4ng ngh\u1EC7 hi\u1EC7u qu\u1EA3, g\xF3p ph\u1EA7n n\xE2ng cao n\u0103ng l\u1EF1c nh\xE2n s\u1EF1 v\xE0 t\u1ED1i \u01B0u v\u1EADn h\xE0nh doanh nghi\u1EC7p.",
    imageUrl: null,
    orderIndex: 4
  },
  {
    id: "vision",
    title: "T\u1EA7m nh\xECn",
    content: "Tr\u1EDF th\xE0nh \u0111\u01A1n v\u1ECB h\xE0ng \u0111\u1EA7u trong l\u0129nh v\u1EF1c \u0111\xE0o t\u1EA1o v\xE0 t\u01B0 v\u1EA5n gi\u1EA3i ph\xE1p c\xF4ng ngh\u1EC7, g\xF3p ph\u1EA7n n\xE2ng cao n\u0103ng l\u1EF1c nh\xE2n s\u1EF1 v\xE0 h\u1ED7 tr\u1EE3 doanh nghi\u1EC7p ph\xE1t tri\u1EC3n b\u1EC1n v\u1EEFng trong k\u1EF7 nguy\xEAn s\u1ED1.",
    imageUrl: null,
    orderIndex: 5
  },
  {
    id: "mission-students",
    title: "S\u1EE9 m\u1EC7nh - \u0110\u1ED1i v\u1EDBi h\u1ECDc vi\xEAn",
    content: "Cung c\u1EA5p c\xE1c ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o th\u1EF1c chi\u1EBFn, gi\xFAp h\u1ECDc vi\xEAn ph\xE1t tri\u1EC3n k\u1EF9 n\u0103ng c\xF4ng ngh\u1EC7, n\xE2ng cao n\u0103ng l\u1EF1c c\u1EA1nh tranh tr\xEAn th\u1ECB tr\u01B0\u1EDDng lao \u0111\u1ED9ng.",
    imageUrl: null,
    orderIndex: 6
  },
  {
    id: "mission-business",
    title: "S\u1EE9 m\u1EC7nh - \u0110\u1ED1i v\u1EDBi doanh nghi\u1EC7p",
    content: "H\u1ED7 tr\u1EE3 doanh nghi\u1EC7p trong \u0111\xE0o t\u1EA1o nh\xE2n s\u1EF1, t\u01B0 v\u1EA5n v\xE0 tri\u1EC3n khai gi\u1EA3i ph\xE1p c\xF4ng ngh\u1EC7, gi\xFAp t\u1ED1i \u01B0u v\u1EADn h\xE0nh v\xE0 t\u0103ng tr\u01B0\u1EDFng b\u1EC1n v\u1EEFng.",
    imageUrl: null,
    orderIndex: 7
  },
  {
    id: "mission-society",
    title: "S\u1EE9 m\u1EC7nh - \u0110\u1ED1i v\u1EDBi x\xE3 h\u1ED9i",
    content: "G\xF3p ph\u1EA7n th\xFAc \u0111\u1EA9y \u1EE9ng d\u1EE5ng c\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0o \u0111\u1EDDi s\u1ED1ng v\xE0 kinh doanh, t\u1EA1o ra gi\xE1 tr\u1ECB thi\u1EBFt th\u1EF1c cho c\u1ED9ng \u0111\u1ED3ng.",
    imageUrl: null,
    orderIndex: 8
  },
  {
    id: "core-values-innovation",
    title: "Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i - \u0110\u1ED5i M\u1EDBi & S\xE1ng T\u1EA1o",
    content: "Lu\xF4n c\u1EADp nh\u1EADt v\xE0 \u1EE9ng d\u1EE5ng c\xF4ng ngh\u1EC7 m\u1EDBi nh\u1EA5t v\xE0o \u0111\xE0o t\u1EA1o v\xE0 tri\u1EC3n khai gi\u1EA3i ph\xE1p. Th\xEDch nghi linh ho\u1EA1t v\u1EDBi xu h\u01B0\u1EDBng c\xF4ng ngh\u1EC7 v\xE0 nhu c\u1EA7u th\u1ECB tr\u01B0\u1EDDng.",
    imageUrl: null,
    orderIndex: 9
  },
  {
    id: "core-values-cooperation",
    title: "Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i - H\u1EE3p T\xE1c & Ph\xE1t Tri\u1EC3n",
    content: "K\u1EBFt n\u1ED1i doanh nghi\u1EC7p, gi\u1EA3ng vi\xEAn, h\u1ECDc vi\xEAn trong h\u1EC7 sinh th\xE1i c\xF4ng ngh\u1EC7 \u0111\u1EC3 c\xF9ng ph\xE1t tri\u1EC3n. \u0110\u1ED3ng h\xE0nh l\xE2u d\xE0i c\xF9ng kh\xE1ch h\xE0ng, mang l\u1EA1i gi\xE1 tr\u1ECB b\u1EC1n v\u1EEFng.",
    imageUrl: null,
    orderIndex: 10
  },
  {
    id: "core-values-quality",
    title: "Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i - Ch\u1EA5t L\u01B0\u1EE3ng & Th\u1EF1c Ti\u1EC5n",
    content: "\u0110\xE0o t\u1EA1o theo ph\u01B0\u01A1ng ph\xE1p h\u1ECDc \u0111i \u0111\xF4i v\u1EDBi th\u1EF1c h\xE0nh, gi\xFAp h\u1ECDc vi\xEAn c\xF3 th\u1EC3 \u1EE9ng d\u1EE5ng ngay v\xE0o c\xF4ng vi\u1EC7c. Cam k\u1EBFt cung c\u1EA5p gi\u1EA3i ph\xE1p c\xF4ng ngh\u1EC7 hi\u1EC7u qu\u1EA3, ph\xF9 h\u1EE3p v\u1EDBi th\u1EF1c t\u1EBF doanh nghi\u1EC7p.",
    imageUrl: null,
    orderIndex: 11
  },
  {
    id: "core-values-responsibility",
    title: "Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i - Tr\xE1ch Nhi\u1EC7m & Cam K\u1EBFt",
    content: "K\u1EBFt n\u1ED1i doanh nghi\u1EC7p, gi\u1EA3ng vi\xEAn, h\u1ECDc vi\xEAn trong h\u1EC7 sinh th\xE1i c\xF4ng ngh\u1EC7 \u0111\u1EC3 c\xF9ng ph\xE1t tri\u1EC3n. \u0110\u1ED3ng h\xE0nh l\xE2u d\xE0i c\xF9ng kh\xE1ch h\xE0ng, mang l\u1EA1i gi\xE1 tr\u1ECB b\u1EC1n v\u1EEFng.",
    imageUrl: null,
    orderIndex: 12
  },
  {
    id: "call-to-action",
    title: "S\u1EB5n S\xE0ng B\u1EAFt \u0110\u1EA7u H\xE0nh Tr\xECnh H\u1ECDc T\u1EADp?",
    content: "Li\xEAn h\u1EC7 ngay v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c t\u01B0 v\u1EA5n mi\u1EC5n ph\xED v\u1EC1 c\xE1c kh\xF3a h\u1ECDc ph\xF9 h\u1EE3p",
    imageUrl: null,
    orderIndex: 13
  }
];
var contactData = {
  id: "main-contact",
  address: "28/61 C\u01B0 X\xE1 L\u1EEF Gia, ph\u01B0\u1EDDng 15, qu\u1EADn 11, Tp. HCM",
  phone: "028.3863.8239",
  email: "info@saigonlab.edu.vn",
  website: "https://www.saigonlab.edu.vn",
  workingHours: "Th\u1EE9 2 - Th\u1EE9 6: 8:00 - 17:30 | Th\u1EE9 7: 8:00 - 12:00"
};

// server/data/storage.ts
var MemStorage = class {
  users;
  consultationRequests;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.consultationRequests = /* @__PURE__ */ new Map();
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createConsultationRequest(insertRequest) {
    const id = randomUUID();
    const request = {
      ...insertRequest,
      message: insertRequest.message || null,
      email: insertRequest.email || null,
      courseInterest: insertRequest.courseInterest || null,
      id,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.consultationRequests.set(id, request);
    return request;
  }
  async getCourses() {
    return coursesData;
  }
  async getCourse(id) {
    return coursesData.find((course) => course.id === id);
  }
  async getFacultyMembers() {
    return facultyData;
  }
  async getNewsArticles() {
    return newsData;
  }
  async getNewsArticle(id) {
    return newsData.find((article) => article.id === id);
  }
  async getPartners() {
    return partnersData;
  }
  async getAboutInfo() {
    return aboutData.sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));
  }
  async getContactInfo() {
    return contactData;
  }
};
var storage = new MemStorage();

// server/services/course.service.ts
var CourseService = class {
  async getAllCourses() {
    return await storage.getCourses();
  }
  async getCourseById(id) {
    return await storage.getCourse(id);
  }
  async searchCourses(query) {
    const courses3 = await storage.getCourses();
    const searchTerm = query.toLowerCase();
    return courses3.filter(
      (course) => course.title.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm) || course.duration.toLowerCase().includes(searchTerm)
    );
  }
};
var courseService = new CourseService();

// server/controllers/courses.controller.ts
var CourseController = class {
  async getAllCourses(req, res) {
    try {
      console.log("[API] GET /api/courses called");
      const courses3 = await courseService.getAllCourses();
      console.log(`[API] Found ${courses3.length} courses`);
      res.json(courses3);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  }
  async getCourseById(req, res) {
    try {
      const { id } = req.params;
      const course = await courseService.getCourseById(id);
      if (!course) {
        res.status(404).json({ message: "Course not found" });
        return;
      }
      res.json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ message: "Failed to fetch course" });
    }
  }
  async searchCourses(req, res) {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        res.status(400).json({ message: "Search query is required" });
        return;
      }
      const courses3 = await courseService.searchCourses(q);
      res.json(courses3);
    } catch (error) {
      console.error("Error searching courses:", error);
      res.status(500).json({ message: "Failed to search courses" });
    }
  }
};
var courseController = new CourseController();

// server/services/faculty.service.ts
var FacultyService = class {
  async getAllFaculty() {
    return await storage.getFacultyMembers();
  }
  async getCoreFaculty() {
    const faculty3 = await storage.getFacultyMembers();
    return faculty3.filter((member) => member.isCore === 1);
  }
  async getExtendedFaculty() {
    const faculty3 = await storage.getFacultyMembers();
    return faculty3.filter((member) => member.isCore === 0);
  }
  async getFacultyBySpecialty(specialty) {
    const faculty3 = await storage.getFacultyMembers();
    const searchTerm = specialty.toLowerCase();
    return faculty3.filter(
      (member) => member.specialty?.toLowerCase().includes(searchTerm)
    );
  }
};
var facultyService = new FacultyService();

// server/controllers/faculty.controller.ts
var FacultyController = class {
  async getAllFaculty(req, res) {
    try {
      const faculty3 = await facultyService.getAllFaculty();
      res.json(faculty3);
    } catch (error) {
      console.error("Error fetching faculty:", error);
      res.status(500).json({ message: "Failed to fetch faculty members" });
    }
  }
  async getCoreFaculty(req, res) {
    try {
      const faculty3 = await facultyService.getCoreFaculty();
      res.json(faculty3);
    } catch (error) {
      console.error("Error fetching core faculty:", error);
      res.status(500).json({ message: "Failed to fetch core faculty members" });
    }
  }
  async getExtendedFaculty(req, res) {
    try {
      const faculty3 = await facultyService.getExtendedFaculty();
      res.json(faculty3);
    } catch (error) {
      console.error("Error fetching extended faculty:", error);
      res.status(500).json({ message: "Failed to fetch extended faculty members" });
    }
  }
  async getFacultyBySpecialty(req, res) {
    try {
      const { specialty } = req.params;
      const faculty3 = await facultyService.getFacultyBySpecialty(specialty);
      res.json(faculty3);
    } catch (error) {
      console.error("Error fetching faculty by specialty:", error);
      res.status(500).json({ message: "Failed to fetch faculty by specialty" });
    }
  }
};
var facultyController = new FacultyController();

// server/services/news.service.ts
var NewsService = class {
  async getAllNews() {
    return await storage.getNewsArticles();
  }
  async getNewsById(id) {
    return await storage.getNewsArticle(id);
  }
  async getRecentNews(limit = 10) {
    const news = await storage.getNewsArticles();
    return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
  }
  async searchNews(query) {
    const news = await storage.getNewsArticles();
    const searchTerm = query.toLowerCase();
    return news.filter(
      (article) => article.title.toLowerCase().includes(searchTerm) || article.author.toLowerCase().includes(searchTerm)
    );
  }
  async getNewsByAuthor(author) {
    const news = await storage.getNewsArticles();
    return news.filter(
      (article) => article.author.toLowerCase() === author.toLowerCase()
    );
  }
};
var newsService = new NewsService();

// server/controllers/news.controller.ts
var NewsController = class {
  async getAllNews(req, res) {
    try {
      console.log("[API] GET /api/news called");
      const news = await newsService.getAllNews();
      console.log(`[API] Found ${news.length} news articles`);
      res.json(news);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ message: "Failed to fetch news articles" });
    }
  }
  async getNewsById(req, res) {
    try {
      const { id } = req.params;
      const article = await newsService.getNewsById(id);
      if (!article) {
        res.status(404).json({ message: "News article not found" });
        return;
      }
      res.json(article);
    } catch (error) {
      console.error("Error fetching news article:", error);
      res.status(500).json({ message: "Failed to fetch news article" });
    }
  }
  async getRecentNews(req, res) {
    try {
      const { limit } = req.query;
      const newsLimit = limit ? parseInt(limit, 10) : 10;
      const news = await newsService.getRecentNews(newsLimit);
      res.json(news);
    } catch (error) {
      console.error("Error fetching recent news:", error);
      res.status(500).json({ message: "Failed to fetch recent news" });
    }
  }
  async searchNews(req, res) {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        res.status(400).json({ message: "Search query is required" });
        return;
      }
      const news = await newsService.searchNews(q);
      res.json(news);
    } catch (error) {
      console.error("Error searching news:", error);
      res.status(500).json({ message: "Failed to search news" });
    }
  }
  async getNewsByAuthor(req, res) {
    try {
      const { author } = req.params;
      const news = await newsService.getNewsByAuthor(author);
      res.json(news);
    } catch (error) {
      console.error("Error fetching news by author:", error);
      res.status(500).json({ message: "Failed to fetch news by author" });
    }
  }
};
var newsController = new NewsController();

// server/services/consultation.service.ts
var ConsultationService = class {
  async createConsultationRequest(request) {
    this.validateConsultationRequest(request);
    return await storage.createConsultationRequest(request);
  }
  validateConsultationRequest(request) {
    if (!request.fullName || request.fullName.trim().length === 0) {
      throw new Error("H\u1ECD v\xE0 t\xEAn l\xE0 b\u1EAFt bu\u1ED9c");
    }
    if (!request.phone || request.phone.trim().length === 0) {
      throw new Error("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\xE0 b\u1EAFt bu\u1ED9c");
    }
    if (!request.email || request.email.trim().length === 0) {
      throw new Error("Email l\xE0 b\u1EAFt bu\u1ED9c");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(request.email)) {
      throw new Error("Email kh\xF4ng h\u1EE3p l\u1EC7");
    }
    const phoneRegex = /^(\+84|84|0)([3|5|7|8|9])+([0-9]{8})$/;
    if (!phoneRegex.test(request.phone.replace(/\s/g, ""))) {
      throw new Error("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7");
    }
  }
  async notifyNewConsultation(request) {
    console.log(`New consultation request from ${request.fullName} (${request.email})`);
    console.log(`Request details:`, {
      id: request.id,
      fullName: request.fullName,
      phone: request.phone,
      email: request.email,
      courseInterest: request.courseInterest,
      message: request.message,
      createdAt: request.createdAt
    });
  }
};
var consultationService = new ConsultationService();

// shared/types/database.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  courseInterest: text("course_interest"),
  message: text("message"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`)
});
var courses = pgTable("courses", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  detailUrl: text("detail_url").notNull()
});
var faculty = pgTable("faculty", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  degree: text("degree").notNull(),
  experience: text("experience").notNull(),
  specialty: text("specialty"),
  isCore: integer("is_core").default(0),
  // 0 for extended, 1 for core
  imageUrl: text("image_url").notNull()
});
var newsArticles = pgTable("news_articles", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  date: text("date").notNull(),
  imageUrl: text("image_url").notNull(),
  url: text("url").notNull()
});
var partners = pgTable("partners", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull()
});
var aboutInfo = pgTable("about_info", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  orderIndex: integer("order_index").default(0)
});
var contactInfo = pgTable("contact_info", {
  id: varchar("id").primaryKey(),
  address: text("address").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  website: text("website"),
  workingHours: text("working_hours")
});

// shared/utils/validation.ts
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  fullName: true,
  phone: true,
  email: true,
  courseInterest: true,
  message: true
}).extend({
  fullName: z.string().min(1, "H\u1ECD v\xE0 t\xEAn l\xE0 b\u1EAFt bu\u1ED9c"),
  phone: z.string().min(1, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\xE0 b\u1EAFt bu\u1ED9c"),
  email: z.string().min(1, "Email l\xE0 b\u1EAFt bu\u1ED9c").email("Email kh\xF4ng h\u1EE3p l\u1EC7"),
  courseInterest: z.string().optional(),
  message: z.string().optional()
});
var searchSchema = z.object({
  query: z.string().min(1, "Search query is required"),
  limit: z.number().min(1).max(50).optional(),
  offset: z.number().min(0).optional()
});
var paginationSchema = z.object({
  page: z.number().min(1).optional().default(1),
  limit: z.number().min(1).max(50).optional().default(10)
});

// server/controllers/general.controller.ts
import { z as z2 } from "zod";
var ConsultationController = class {
  async createConsultationRequest(req, res) {
    try {
      const data = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await consultationService.createConsultationRequest(data);
      consultationService.notifyNewConsultation(consultationRequest).catch((error) => {
        console.error("Failed to send consultation notification:", error);
      });
      res.json({
        message: "Consultation request submitted successfully",
        id: consultationRequest.id
      });
    } catch (error) {
      console.error("Error creating consultation request:", error);
      if (error instanceof z2.ZodError) {
        res.status(400).json({
          message: "Invalid request data",
          errors: error.errors
        });
        return;
      }
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message
        });
        return;
      }
      res.status(500).json({
        message: "Failed to submit consultation request"
      });
    }
  }
};
var GeneralController = class {
  async getAboutInfo(req, res) {
    try {
      const aboutInfo3 = await storage.getAboutInfo();
      res.json(aboutInfo3);
    } catch (error) {
      console.error("Error fetching about info:", error);
      res.status(500).json({ message: "Failed to fetch about information" });
    }
  }
  async getContactInfo(req, res) {
    try {
      const contactInfo3 = await storage.getContactInfo();
      res.json(contactInfo3);
    } catch (error) {
      console.error("Error fetching contact info:", error);
      res.status(500).json({ message: "Failed to fetch contact information" });
    }
  }
  async getPartners(req, res) {
    try {
      const partners3 = await storage.getPartners();
      res.json(partners3);
    } catch (error) {
      console.error("Error fetching partners:", error);
      res.status(500).json({ message: "Failed to fetch partners" });
    }
  }
};
var consultationController = new ConsultationController();
var generalController = new GeneralController();

// server/routes/api.ts
async function registerRoutes(app2) {
  app2.get("/api/courses", courseController.getAllCourses.bind(courseController));
  app2.get("/api/courses/search", courseController.searchCourses.bind(courseController));
  app2.get("/api/courses/:id", courseController.getCourseById.bind(courseController));
  app2.get("/api/faculty", facultyController.getAllFaculty.bind(facultyController));
  app2.get("/api/faculty/core", facultyController.getCoreFaculty.bind(facultyController));
  app2.get("/api/faculty/extended", facultyController.getExtendedFaculty.bind(facultyController));
  app2.get("/api/faculty/specialty/:specialty", facultyController.getFacultyBySpecialty.bind(facultyController));
  app2.get("/api/news", newsController.getAllNews.bind(newsController));
  app2.get("/api/news/recent", newsController.getRecentNews.bind(newsController));
  app2.get("/api/news/search", newsController.searchNews.bind(newsController));
  app2.get("/api/news/author/:author", newsController.getNewsByAuthor.bind(newsController));
  app2.get("/api/news/:id", newsController.getNewsById.bind(newsController));
  app2.get("/api/about", generalController.getAboutInfo.bind(generalController));
  app2.get("/api/contact", generalController.getContactInfo.bind(generalController));
  app2.get("/api/partners", generalController.getPartners.bind(generalController));
  app2.post("/api/consultation", consultationController.createConsultationRequest.bind(consultationController));
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "client", "src", "assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "..", "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/utils/news-scraper.ts
import * as cheerio from "cheerio";
import cron from "node-cron";
var NewsScraper = class {
  storage;
  baseUrl = "https://www.saigonlab.edu.vn";
  constructor(storage2) {
    this.storage = storage2;
  }
  async scrapeNews() {
    try {
      console.log("Starting news scraping...");
      const response = await fetch(`${this.baseUrl}/tin-tuc/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const $ = cheerio.load(html);
      const newsItems = [];
      $(".news-item, .post-item, article").each((index, element) => {
        const $element = $(element);
        const title = $element.find("h2, h3, .title, .post-title").first().text().trim();
        const link = $element.find("a").first().attr("href");
        const image = $element.find("img").first().attr("src");
        const date = $element.find(".date, .post-date, time").first().text().trim();
        const author = $element.find(".author, .post-author").first().text().trim() || "SAIGONLAB";
        if (title && link) {
          const fullUrl = link.startsWith("http") ? link : `${this.baseUrl}${link}`;
          const fullImageUrl = image && image.startsWith("http") ? image : image ? `${this.baseUrl}${image}` : `${this.baseUrl}/wp-content/uploads/2024/04/logosglab.jpg`;
          const newsItem = {
            id: this.generateId(title),
            title,
            author: author || "SAIGONLAB",
            date: this.parseDate(date),
            imageUrl: fullImageUrl,
            url: fullUrl
          };
          newsItems.push(newsItem);
        }
      });
      console.log(`Scraped ${newsItems.length} news items`);
      return newsItems.slice(0, 20);
    } catch (error) {
      console.error("Error scraping news:", error);
      return [];
    }
  }
  generateId(title) {
    return title.toLowerCase().replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a").replace(/[èéẹẻẽêềếệểễ]/g, "e").replace(/[ìíịỉĩ]/g, "i").replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o").replace(/[ùúụủũưừứựửữ]/g, "u").replace(/[ỳýỵỷỹ]/g, "y").replace(/đ/g, "d").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-").substring(0, 50);
  }
  parseDate(dateStr) {
    if (!dateStr) {
      return (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    }
    const vietnameseMonths = {
      "th\xE1ng 1": "01",
      "th\xE1ng 2": "02",
      "th\xE1ng 3": "03",
      "th\xE1ng 4": "04",
      "th\xE1ng 5": "05",
      "th\xE1ng 6": "06",
      "th\xE1ng 7": "07",
      "th\xE1ng 8": "08",
      "th\xE1ng 9": "09",
      "th\xE1ng 10": "10",
      "th\xE1ng 11": "11",
      "th\xE1ng 12": "12"
    };
    let normalizedDate = dateStr.toLowerCase();
    Object.entries(vietnameseMonths).forEach(([vn, num]) => {
      normalizedDate = normalizedDate.replace(vn, num);
    });
    const datePatterns = [
      /(\d{1,2})\/(\d{1,2})\/(\d{4})/,
      /(\d{1,2})-(\d{1,2})-(\d{4})/,
      /(\d{1,2})\s+(\d{1,2})\s+(\d{4})/
    ];
    for (const pattern of datePatterns) {
      const match = normalizedDate.match(pattern);
      if (match) {
        const [, day, month, year] = match;
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
      }
    }
    return (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
  }
  startScheduledScraping() {
    cron.schedule("0 */6 * * *", async () => {
      console.log("Running scheduled news scraping...");
      await this.scrapeNews();
    });
    setTimeout(() => {
      this.scrapeNews();
    }, 5e3);
  }
  async manualScrape() {
    return await this.scrapeNews();
  }
};

// server/utils/logger.ts
var log = (message) => {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  console.log(`[${timestamp}] ${message}`);
};

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
    log(`NODE_ENV: ${process.env.NODE_ENV}`);
    log(`App mode: ${app.get("env")}`);
    const newsScraper = new NewsScraper(storage);
    newsScraper.startScheduledScraping();
    log("News scraper started - will check for new articles every 6 hours");
  });
})();
