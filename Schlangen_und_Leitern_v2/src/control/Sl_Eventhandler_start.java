package control;

import application.Main;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ButtonType;
import javafx.scene.image.Image;
import javafx.stage.Stage;
import model.Sl_spiel;
import javafx.scene.control.Alert.AlertType;
import view.Sl_Pane;
import view.Sl_Start;

public class Sl_Eventhandler_start implements EventHandler<ActionEvent>{

	Sl_Start sp;
	Sl_spiel st;
	
	
	public Sl_Eventhandler_start(Sl_Start sp, Sl_spiel st) {
		setSp(sp);
		setSt(st);
		
	}
	public int spieler;

	@Override
	public void handle(ActionEvent ae) {
		Button b_event = (Button) ae.getSource();
		
		if(b_event.getText().equals("Spiel starten")) {
			try {
			  spieler = sp.cb_spieler.getValue();
			  System.out.println(spieler);
			  //wechsle Scene
			  Stage stage_start = (Stage) b_event.getScene().getWindow();
			  st.erstelleSpieler(spieler);
			  Scene game = new Scene(new Sl_Pane(),1536,864);
			  stage_start.setScene(game);
			  stage_start.setFullScreen(true);
			  stage_start.getIcons().add(new Image("file:Logo.png"));
			} catch (NullPointerException e) {
				e.printStackTrace();
				
				Alert a_error = new Alert(AlertType.ERROR, null, ButtonType.PREVIOUS);
	            a_error.setTitle("Error");
	            a_error.setContentText("Bitte waehlen sie eine Spieleranzahl aus!");
	            a_error.showAndWait();
			}
		}
		
	}

	public Sl_Start getSp() {
		return sp;
	}

	public void setSp(Sl_Start sp) {
		this.sp = sp;
	}

	public int getSpieler() {
		return spieler;
	}

	public void setSpieler(int spieler) {
		this.spieler = spieler;
	}

	public Sl_spiel getSt() {
		return st;
	}

	public void setSt(Sl_spiel st) {
		this.st = st;
	}

	

}
