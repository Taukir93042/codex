import React, { useEffect, useRef } from "react";

const CodeParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const snippets = [
      // C++ & DSA
      "vector<int> dp(n, 0);",
      "class Solution {",
      "O(N log N)",
      "Node* next;",
      "dfs(root, visited);",
      "std::cout << ans;",
      "template<typename T>",
      "priority_queue<int> pq;",
      "int mid = l + (r - l) / 2;",
      "dp[i][w] = max(take, notTake);",
      "struct TreeNode* left;",
      "BinarySearch(arr, k);",
      "std::unordered_map<int, int>",
      "while (low <= high) {",
      "graph[u].push_back(v);",
      "*ptr = &value;",
      "O(1) Space",
      "n * (n + 1) / 2",
      "01010101",
      "std::unique_ptr<Node>",
      "TrieNode* children[26];",
      "int gcd(int a, int b)",
      
      // Web Dev & React
      "const [state, setState] = useState();",
      "useEffect(() => {}, []);",
      "await fetch('/api/courses');",
      "<Component {...props} />",
      "export default CodeCampus;",
      "const app = express();",
      "redux -> dispatch()",
      "tailwind.config.js",
      "map.set(key, val);",
      "const [user, setUser] = useContext(AuthContext);",
      "ReactDOM.createRoot(root).render(<App />);",
      "useMemo(() => compute(), [dep]);",
      "useCallback(() => fn(), []);",
      "const res = await axios.get('/data');",
      "next/image next/navigation",
      "jwt.verify(token, secret);",

      // Backend, Cloud, DB & DevOps
      "docker run -p 3000:3000",
      "git commit -m 'feat: lms'",
      "SELECT * FROM students;",
      "Promise.all([p1, p2]);",
      "</>",
      "async / await",
      "git push origin main",
      "npm install lucide-react",
      "new Promise((resolve) => resolve())",
      "CREATE TABLE enrollments;",
      "redis.setex(cacheKey, 3600, data);",
      "prisma.course.findMany()",
      "const router = express.Router();"
    ];

    let width = 0;
    let height = 0;

    const updateDimensions = () => {
      if (!canvas || !canvas.parentElement) return;
      const parent = canvas.parentElement;
      const rect = parent.getBoundingClientRect();
      const newWidth = parent.offsetWidth || rect.width || window.innerWidth;
      const newHeight = parent.offsetHeight || rect.height || 3500;
      
      if (width !== newWidth || height !== newHeight) {
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
      }
    };

    updateDimensions();

    const colors = [
      "rgba(59, 130, 246, ",   // Blue
      "rgba(99, 102, 241, ",   // Indigo
      "rgba(6, 182, 212, ",    // Cyan
      "rgba(168, 85, 247, ",   // Purple
      "rgba(16, 185, 129, ",   // Emerald
      "rgba(244, 63, 94, ",    // Rose
      "rgba(245, 158, 11, ",   // Amber
    ];

    const particles = [];
    const targetCount = Math.min(Math.max(Math.floor(((width || 1200) * (height || 3500)) / 38000), 75), 160);

    for (let i = 0; i < targetCount; i++) {
      particles.push({
        text: snippets[Math.floor(Math.random() * snippets.length)],
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || 3500),
        speedY: 0.18 + Math.random() * 0.35,
        speedX: (Math.random() - 0.5) * 0.2,
        fontSize: Math.floor(11 + Math.random() * 4),
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.10 + Math.random() * 0.18,
        pulseSpeed: 0.008 + Math.random() * 0.015,
        pulseVal: Math.random() * Math.PI * 2,
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const render = () => {
      if (!ctx || width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulseVal += p.pulseSpeed;

        const currentOpacity = p.opacity + Math.sin(p.pulseVal) * 0.06;

        if (p.y < -40) {
          p.y = height + 30;
          p.x = Math.random() * width;
          p.text = snippets[Math.floor(Math.random() * snippets.length)];
        }

        if (p.x < -180) p.x = width + 50;
        if (p.x > width + 180) p.x = -50;

        ctx.font = `600 ${p.fontSize}px "Fira Code", monospace, "JetBrains Mono", Consolas, monospace`;
        ctx.fillStyle = `${p.colorBase}${Math.max(0.04, currentOpacity)})`;
        ctx.shadowColor = p.colorBase.replace(", ", ", 0.4)");
        ctx.shadowBlur = 6;
        ctx.fillText(p.text, p.x, p.y);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
};

export default CodeParticles;
