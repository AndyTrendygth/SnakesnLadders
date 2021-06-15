package view;

import control.Sl_Eventhandler;
import control.Sl_Eventhandler_start;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundImage;
import javafx.scene.layout.BackgroundRepeat;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import model.Sl_spiel;

public class Sl_Pane extends BorderPane{

	public Sl_Pane() {
	    init_bg(); //Spielfeld
		init_bottom(); //Wuerfeln&weiter button
		init_center(); //GridPane was die Spieler bewegen soll
		//init();
		init_right(); //Label für Status
	}
	Sl_spiel sp = new Sl_spiel();
	Sl_Eventhandler ev = new Sl_Eventhandler(sp, this);
	
	public void init_bg() {
		//1536x864
		Image i = new Image("file:Spielfeld v1.2.png",1536,864,true,false);
	    BackgroundImage bgi = new BackgroundImage(i, BackgroundRepeat.NO_REPEAT, BackgroundRepeat.NO_REPEAT, null, null);
		Background bg =  new Background(bgi);
		this.setBackground(bg);
	}
	
	public Button b_wuerfeln = new Button("wuerfeln");
	
	public void init_bottom() {
		b_wuerfeln.setOnAction(ev);
		this.setLeft(b_wuerfeln);
		
	}
	public Rectangle r1 = new Rectangle(30,30,Color.BLACK);
	public Rectangle r2 = new Rectangle(30,30, Color.RED);
	public Rectangle r3 = new Rectangle(30,30, Color.BLUE);
	public Rectangle r4 = new Rectangle(30,30, Color.ORANGE);
	
	public void init_center() {
		GridPane g_center = new GridPane();
		if(Sl_spiel.spieler.size()==2) {
			g_center.add(r1, 0, 0);
			g_center.add(r2, 1, 0);
			this.setCenter(g_center);
			r1.setTranslateX(280);
			r1.setTranslateY(780);
			r2.setTranslateX(280);
			r2.setTranslateY(780);
		
		}
		if(sp.spieler.size()==3) {
			g_center.add(r1, 0, 0);
			g_center.add(r2, 1, 0);
			g_center.add(r3, 0, 1);
			this.setCenter(g_center);
			
			r1.setTranslateX(280);
			r1.setTranslateY(780);
			r2.setTranslateX(280);
			r2.setTranslateY(780);
			r3.setTranslateX(280);
			r3.setTranslateY(780);
		
		}
		if(sp.spieler.size()==4) {
			g_center.add(r1, 0, 0);
			g_center.add(r2, 1, 0);
			g_center.add(r3, 0, 1);
			g_center.add(r4, 1, 1);
			this.setCenter(g_center);
			
			r1.setTranslateX(280);
			r1.setTranslateY(780);
			r2.setTranslateX(280);
			r2.setTranslateY(780);
			r3.setTranslateX(280);
			r3.setTranslateY(780);
			r4.setTranslateX(280);
			r4.setTranslateY(780);
		}
	}
	
	public Label l_status = new Label();
	
	public void init_right() {
		GridPane g_top = new GridPane();
		l_status.setText("Spieler1 ist an der Reihe");
		l_status.setTextFill(Color.WHITE);
		l_status.setFont(Font.font("Verdana", 20));
		l_status.setPadding(new Insets(10,10,10,10));
		g_top.add(l_status, 0, 0);
		this.setRight(g_top);
	}
	
	public Image bImage(int gewuerfelt) {
		switch(gewuerfelt){
		case 1:
			return new Image("file:1.png",100,100,true,false);
		case 2:
			return new Image("file:2.png",100,100,true,false);
		case 3:
			return new Image("file:3.png",100,100,true,false);
		case 4:
			return new Image("file:4.png",100,100,true,false);
		case 5:
			return new Image("file:5.png",100,100,true,false);
		case 6:
			return new Image("file:6.png",100,100,true,false);
		default:
			return null;
		}
	}
	
	
}
