package control;

import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ButtonType;
import javafx.scene.image.ImageView;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.control.Alert.AlertType;
import javafx.stage.Stage;
import javafx.stage.Window;
import model.Sl_Spieler;
import model.Sl_spiel;
import view.Sl_Pane;
import view.Sl_Start;
import view.Sl_Win;

public class Sl_Eventhandler implements EventHandler<ActionEvent>{

	Sl_spiel sp;
	Sl_Pane sl;
	
	public Sl_Eventhandler(Sl_spiel s, Sl_Pane sl) {
		setS(s);
		this.sl = sl;
	}
	
	int akt_spieler = 0;
	int koordx = 0;
	int koordy = 0;
	int count = 0;
	@Override
	public void handle(ActionEvent ae) {
		
		Button b_event = (Button) ae.getSource();
		//int akt_spieler = 0;
		int gewuerfelt = sp.wuerfeln();
		
		//int koordx = 0;
		//int koordy = 0;
		int akt_feld = 1;
		
		if(b_event.getText().equals("wuerfeln")) {
			//wuerfeln, grafisch ausgeben, mit dem Spieler ziehen
			if(akt_spieler==sp.spieler.size()) {
				akt_spieler = 0;
			}
			System.out.println("aktueller Spieler" + akt_spieler);
			//Würfelergebnis
			gewuerfelt = sp.wuerfeln();
			sl.b_wuerfeln.setGraphic(new ImageView(sl.bImage(gewuerfelt)));
			sl.b_wuerfeln.setFont(Font.font("Arial", FontWeight.BOLD, 0.0));
			//sl.b_wuerfeln.setStyle("-fx-padding: -100 -100 -100 -100;");
			System.out.println("gewuerfelt " + gewuerfelt);
			//Würfelergebnis ausgeben lassen
			sl.l_status.setText(gewuerfelt + " gewürfelt");
			//Würfelergebnis auf Feld addieren
		    akt_feld = sp.spieler.get(akt_spieler).getAkt_feld() + gewuerfelt;
		    System.out.println("Feld nach würfeln: " +akt_feld);
			//Spieler auf Feld setzen
			sp.spieler.get(akt_spieler).setAkt_feld(akt_feld);
			koordx = sp.koordx(akt_feld);
			koordy = sp.koordy(akt_feld);
			setkoord(koordx,koordy);
			//Checken ob Leiterfeld-Schlangenfeld
			System.out.println(akt_feld + "akt_feld vor schlangen leiter check");
		}
		
			if(sp.feld_leiter(akt_feld)!=akt_feld) {
				Alert a_leiter = new Alert(AlertType.INFORMATION, null, ButtonType.OK);
				Window a = (Window) b_event.getScene().getWindow();
	            a_leiter.initOwner(a);
	            a_leiter.setTitle("Leiterfeld");
	            a_leiter.setContentText("Du bist auf einem Leiterfeld gelandet und konntest nach oben klettern!");
	            a_leiter.showAndWait();
	           // Window a = (Window) b_event.getScene().getWindow();
	            //a_leiter.initOwner(a);
				System.out.println("leiterfeld");
				akt_feld = sp.feld_leiter(akt_feld);
				sp.spieler.get(akt_spieler).setAkt_feld(akt_feld);
				koordx = sp.koordx(akt_feld);
				koordy = sp.koordy(akt_feld);
				setkoord(koordx,koordy);
				System.out.println(akt_feld + " Feld nach leiter");
			}
		    if(sp.feld_schlange(akt_feld)!=akt_feld) {
				Alert a_schlange = new Alert(AlertType.INFORMATION, null, ButtonType.OK);
				Window a = (Window) b_event.getScene().getWindow();
				a_schlange.initOwner(a);
				a_schlange.setTitle("Schlangenfeld");
				a_schlange.setContentText("Du bist auf einem Schlangenfeld gelandet und bist zurückgerutscht!");
				a_schlange.showAndWait();
				//Window a = (Window) b_event.getScene().getWindow();
				//a_schlange.initOwner(a);
				
				System.out.println("schlangenfeld");
				akt_feld = sp.feld_schlange(akt_feld);
				sp.spieler.get(akt_spieler).setAkt_feld(akt_feld);
				koordx = sp.koordx(akt_feld);
				koordy = sp.koordy(akt_feld);
				setkoord(koordx,koordy);
				System.out.println(akt_feld + " Feld nach schlange");
			}
			if(sp.checkWin(akt_feld)==true) {
				
				sl.l_status.setText("GEWONNEN");
				System.out.println("gewonnen");
				
				Stage stage_start = (Stage) b_event.getScene().getWindow();
				Scene win = new Scene(new Sl_Win(),1536,864);
				stage_start.setScene(win);
		}
			 akt_spieler++;
		}
		
	
	
	public void setkoord(int koordx, int koordy) {
		switch(akt_spieler) {
		case 0:
			sl.r1.setTranslateX(koordx);
			sl.r1.setTranslateY(koordy);
			break;
		case 1:
			sl.r2.setTranslateX(koordx);
			sl.r2.setTranslateY(koordy);
			break;
		case 2:
			sl.r3.setTranslateX(koordx);
			sl.r3.setTranslateY(koordy);
			break;
		case 3:
			sl.r4.setTranslateX(koordx);
			sl.r4.setTranslateY(koordy);
			break;
		}
	}
	public Sl_spiel getS() {
		return sp;
	}
	public void setS(Sl_spiel s) {
		this.sp = s;
	}

}
