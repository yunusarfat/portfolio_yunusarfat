// components/ui/card.js
const Card = ({ children, className }) => (
  <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-sm ${className}`}>{children}</p>
);

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription };
