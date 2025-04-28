import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl font-bold mb-4">Страница не найдена</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Страница, которую вы ищете, не существует или была перемещена по другому адресу.
      </p>
      <Link to="/">
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  );
};

export default NotFound;
