Задание 3
Поздеев Сергей 3253

1) В Complex.h удалить деструктор. Для данного класса он не нужен. Почему?
    В классе Complex мы не выделяем память в куче, следовательно нечего очищать
2) Зачем возвращается ссылка на поток?
    Иначе вернется его копия
3) Почему параметр ‘c’ передается как константная ссылка?
    Мы не собираемся изменять содержимое памяти, куда ссылается 'c'
4) Что означают квалификаторы const в определении операции?
    То, что состояние объекта не будет изменено в процессе выполения метода
5) Зачем нужны inline функции?
    inline функции требуются для оптимизации кода
6) Как создаются динамические объекты и массивы объектов?
    Дин. объекты и массивы создаются в куче, куда указывает их указатель


int main()
{
    Complex c(1, 2);
    std::cout << c << std::endl;
    std::cout << c.Mod() << std::endl;
    std::cout << c.Arg() << std::endl;
    std::cout << c.Conjugate() << std::endl;

    Complex v[3] = {Complex(2, 3), Complex(4, 5), Complex(6, 7)};
    for (int i = 0; i < 3; i++)
    {
        std::cout << v[i] << " ";
    }

    std::cout << std::endl;
    Complex v2[3] = {1, 2, Complex(6, 7)};
    for (int i = 0; i < 3; i++)
    {
        std::cout << v2[i] << " ";
    }
    std::cout << std::endl;

    Complex *pc = new Complex(1, 4);
    std::cout << pc->re << " " << pc->im << std::endl;
    delete pc;

    Complex *array = new Complex[3];
    std::cout << *array << std::endl;
    array->re = 4;
    std::cout << *array << std::endl;
    delete[] array;

    return 0;
}

#include <iostream>
#include <ostream>
#include <cmath>
class Complex
{
public:
    double re;
    double im;

    Complex(double re = 0, double im = 0)
    {
        this->re = re;
        this->im = im;
    }
    Complex operator+(const Complex &c) const
    {
        return Complex(re + c.re, im + c.im);
    }
    Complex operator-(const Complex &c) const
    {
        return Complex(re - c.re, im - c.im);
    }
    Complex operator*(const Complex &c) const
    {
        return Complex(re * c.re - im * c.im,
                       re * c.im + im * c.re);
    }
    Complex operator/(const Complex &c) const
    {
        Complex temp;
        double r = c.re * c.re + c.im * c.im;
        temp.re = (re * c.re + im * c.im) / r;
        temp.im = (im * c.re - re * c.im) / r;
        return temp;
    }
    double Mod()
    {
        return sqrt(re * re + im * im);
    }
    Complex Conjugate()
    {
        return Complex(re, im * (-1));
    }
    double Arg()
    {
        if (!Mod())
        {
            return 0;
        }
        else if (re > 0)
        {
            return atan(im / re);
        }
        else if (re < 0)
        {
            if (im >= 0)
                return acos(-1) + atan(im / re);
            else
                return (-1) * acos(-1) - atan(im / re);
        }
        else
        {
            if (im > 0)
                return acos(0);
            else
                return (-1) * acos(0);
        }
    }
};
inline std::ostream &operator<<(std::ostream &o, const Complex &c)
{
    return o << "(" << c.re << ", " << c.im << ")";
}
