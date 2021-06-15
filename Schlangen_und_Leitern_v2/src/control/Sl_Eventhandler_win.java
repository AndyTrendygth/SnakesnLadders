package control;

import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;
import view.Sl_Pane;
import view.Sl_Start;

public class Sl_Eventhandler_win implements EventHandler <ActionEvent>{

	@Override
	public void handle(ActionEvent arg0) {
		Button b_event =  (Button) arg0.getSource();
		
		if(b_event.getText().equals("Nochmal spielen")) {
			Stage stage_start = (Stage) b_event.getScene().getWindow();
			  Scene start = new Scene(new Sl_Start(),700,700);
			  stage_start.setScene(start);
		}
		else {
			Platform.exit();
		}
		
	}

}
