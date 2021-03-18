package edu.simpson.kottlowski;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(name = "memeServlet", value = "/memes-servlet")
public class MemeServlet extends HttpServlet {
    private final static Logger log = Logger.getLogger(MemeServlet.class.getName());

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        log.log(Level.INFO, "Meme servlet");

        ServletContext context = getServletContext();
        InputStream inputStream = context.getResourceAsStream("main/java/resources/harry-potter-background.jpg");
        BufferedImage image = ImageIO.read(inputStream);

        Graphics g = image.getGraphics();
        String fontName = "Century Schoolbool";
        int fontSize = 50;
        int fontStyle = Font.BOLD;
        Font font = new Font(fontName, fontStyle, fontSize);
        g.setFont(font);

        g.setColor(Color.BLUE);

        String message = "Harry Potter";
        g.drawString(message, 100, 100);

        g.dispose();


        response.setContentType("image/jpg");
        OutputStream output = response.getOutputStream();
        ImageIO.write(image, ".jpg", output);
    }

    public void destroy() {
    }
}